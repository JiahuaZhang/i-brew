import { CloseOutlined } from '@ant-design/icons';
import { Input, message, Popover, Tag } from 'antd';
import { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useEscape } from '../../../utils/hook/useEscape';
import { Action, actionState, ActionType, SeedTagAction } from '../../../utils/state/action';

interface Props {
  tag: string;
  index: number;
  tags: string[];
}

export const SeedTag = (props: Props) => {
  const setAction = useSetRecoilState(actionState);
  const [inputVisible, setInputVisible] = useState(false);
  const { tag, index, tags } = props;
  const [editedTag, setEditedTag] = useState(tag);
  const inputRef = useRef(null);
  useEscape(inputRef, () => setInputVisible(false));

  return (
    <>
      {inputVisible && (
        <Input
          ref={(r) => (inputRef.current = r?.input)}
          autoFocus
          style={{
            maxWidth: '5rem',
            padding: '0 .25rem',
            marginRight: '.5rem',
            fontSize: '1.25rem',
          }}
          value={editedTag}
          onChange={(e) => setEditedTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (editedTag !== tag && tags.includes(editedTag)) {
                message.error(`${editedTag} already existed!`, 1.5);
                return;
              }

              const seedTagAction = { type: 'edit', index, value: editedTag } as SeedTagAction;
              const action = { [ActionType.SeedTag]: seedTagAction } as Action;
              setAction(action);
            }
          }}
        />
      )}

      {!inputVisible && (
        <Tag
          style={{ fontSize: 'inherit', padding: '.25rem' }}
          onDoubleClick={() => setInputVisible(true)}
          closable={true}
          closeIcon={<CloseOutlined style={{ fontSize: '1.1rem' }} />}
          onClose={() => {
            const seedTagAction = {
              type: 'delete',
              index,
              value: '',
            } as SeedTagAction;
            const action = { [ActionType.SeedTag]: seedTagAction } as Action;
            setAction(action);
          }}>
          {tag.length > 7 ? (
            <Popover content={tag}>
              <span> {`${tag.substring(0, 5)}...`} </span>
            </Popover>
          ) : (
            <span>{tag}</span>
          )}
        </Tag>
      )}
    </>
  );
};

// double click edit directly
// single click? popover? future -- linking to auto search relative tags as well
