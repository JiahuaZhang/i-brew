import { PlusOutlined } from '@ant-design/icons';
import { Input, message, Tag } from 'antd';
import React, { useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEscape } from '../../../utils/hook/useEscape';
import { Action, actionState, ActionType, SeedTagAction } from '../../../utils/state/action';
import { seedTagsState } from '../../../utils/state/seed';

export const NewSeedTag = () => {
  const [newTag, setNewTag] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLElement>(null);
  const setAction = useSetRecoilState(actionState);
  const seeTags = useRecoilValue(seedTagsState);
  useEscape(inputRef, () => setInputVisible(false));

  return (
    <>
      {inputVisible && (
        <Input
          autoFocus
          style={{
            display: 'inline-block',
            maxWidth: '5rem',
            padding: '0 .25rem',
            fontSize: '1.25rem',
          }}
          ref={(r) => (inputRef.current = r?.input)}
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (seeTags.includes(newTag)) {
                message.error(`${newTag} already existed!`, 1.5);
                return;
              }

              const seedTagAction = {
                type: 'add',
                value: newTag,
              } as SeedTagAction;
              const action = { [ActionType.SeedTag]: seedTagAction } as Action;
              setAction(action);
              setNewTag('');
              setInputVisible(false);
            } else if (e.key === 'Escape') {
              if (newTag) {
                setNewTag('');
                e.stopPropagation();
              }
            }
          }}
        />
      )}

      {!inputVisible && (
        <Tag
          style={{
            border: '1px dashed gray',
            fontSize: 'inherit',
            padding: '.25rem',
          }}
          onClick={(event) => {
            setInputVisible(true);
            event.stopPropagation();
          }}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};
