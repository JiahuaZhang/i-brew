import _ from 'lodash';
import { useSetRecoilState } from 'recoil';
import { historyTrack } from '../state/history';

export const useHotKey = () => {
  const setHistoryTrack = useSetRecoilState(historyTrack);

  const undo = _.debounce(() => setHistoryTrack({ type: 'undo' }), 750, { leading: true, trailing: false });
  const redo = _.debounce(() => setHistoryTrack({ type: 'redo' }), 750, { leading: true, trailing: false });

  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
      undo();
    } else if ((event.metaKey || event.ctrlKey) && event.key === 'y') {
      redo();
      event.preventDefault();
    }
  })
}