import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API, graphqlOperation } from 'aws-amplify';
import { isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'react';
import Observable from 'zen-observable-ts';
import { Config } from '../../src/API';
import { createConfig, updateConfig } from '../../src/graphql/mutations';
import { listConfigs } from '../../src/graphql/queries';
import { onUpdateConfigById } from '../../src/graphql/subscriptions';
import { ConfigDetail, ConfigOption } from './ConfigOption';

interface Props {
  style?: CSSProperties;
}

const defaultConfig: Config = { locale: 'english', tagPopUpControl: 'toggle' } as Config;

const allConfigDetails: ConfigDetail[] = [
  {
    mapping: 'locale',
    description: 'locale',
    currentOption: 'english',
    options: ['english', '中文'],
  },
  {
    mapping: 'tagPopUpControl',
    description: 'Show tag option tip',
    currentOption: 'toggle',
    options: ['toggle', 'click'],
  },
];

const ConfigTable = (props: Props) => {
  const [configuration, setConfiguration] = useState({} as Config);
  const configurationRef = useRef(null);

  const needUpdateConfiguration = (newConfig: Config) => {
    const mappings = allConfigDetails.map((detail) => detail.mapping);
    return mappings.some((mapping) => configurationRef.current[mapping] !== newConfig[mapping]);
  };

  useEffect(() => {
    const load = async () => {
      const result = (await API.graphql(graphqlOperation(listConfigs))) as GraphQLResult<{
        listConfigs: { items: Config[] };
      }>;
      const onlineConfig = result.data.listConfigs.items[0];
      if (onlineConfig) {
        configurationRef.current = onlineConfig;
        setConfiguration(onlineConfig);
      } else {
        setConfiguration(defaultConfig);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (isEmpty(configuration)) return;

    const update = async () => {
      if (!configuration.id) {
        const result = (await API.graphql(
          graphqlOperation(createConfig, { input: configuration })
        )) as GraphQLResult<{ createConfig: Config }>;
        configurationRef.current = result.data.createConfig;
        setConfiguration((value) => ({ ...value, id: result.data.createConfig.id }));
      } else if (needUpdateConfiguration(configuration)) {
        ['createdAt', 'updatedAt', 'owner'].forEach((key) => delete configuration[key]);
        await API.graphql(graphqlOperation(updateConfig, { input: configuration }));
      }
    };

    update();
  }, [configuration]);

  useEffect(() => {
    if (!configuration.id) return;

    let subscription: ZenObservable.Subscription;
    const subscribe = async () => {
      return (
        API.graphql(
          graphqlOperation(onUpdateConfigById, { id: configuration.id })
        ) as Observable<any>
      ).subscribe({
        next: (data) => {
          const newConfig = data.value.data.onUpdateConfigById as Config;
          if (needUpdateConfiguration(newConfig)) {
            setConfiguration(newConfig);
          }
        },
        error: (error) => {
          console.error('Subscription onUpdateConfigById failed', error);
        },
      });
    };
    subscribe().then((fn) => (subscription = fn));

    return () => subscription.unsubscribe();
  }, [configuration.id]);

  useEffect(() => {
    configurationRef.current = configuration;
  }, [configuration]);

  return (
    <table {...props}>
      <tbody>
        {allConfigDetails.map(({ description, options, mapping }) => (
          <ConfigOption
            key={mapping}
            description={description}
            currentOption={configuration[mapping]}
            options={options}
            update={(e) => setConfiguration((value) => ({ ...value, [mapping]: e }))}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ConfigTable;
