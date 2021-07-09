/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { seedIdeastate } from '../../../src/utils/state/seed';

export const SeedIdea = () => {
  const [seedIdea, setSeedIdea] = useRecoilState(seedIdeastate);
  const textRef = useRef(seedIdea);

  return (
    <div
      css={{
        border: '1px solid #607d8b80',
        img: {
          maxWidth: '100%',
          height: 'auto',
        },
      }}
      onInput={(e) => {
        setSeedIdea((e.target as HTMLElement).innerHTML);
      }}
      onKeyDown={(e) => {
        if (!e.ctrlKey && !e.metaKey) return;

        switch (e.key) {
          case 'j':
            document.execCommand('justifyLeft');
            break;
          case 'e':
            if (e.shiftKey) {
              document.execCommand('justifyFull');
            } else {
              document.execCommand('justifyCenter');
            }
            break;
          case 'k':
            document.execCommand('justifyRight');
            break;

          case 'Enter':
            (e.target as HTMLDivElement).blur();
            console.log('enter detect!');
            break;

          default:
            break;
        }
      }}
      dangerouslySetInnerHTML={{ __html: textRef.current }}
      style={{
        fontSize: '1.5rem',
        margin: '1rem',
        padding: '.25rem',
      }}
      contentEditable></div>
  );
};
