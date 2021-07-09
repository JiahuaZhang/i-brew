import { Select } from 'antd';
import { useTranslation } from 'next-i18next';

export interface ConfigDetail {
  mapping?: string;
  description: string;
  options: string[];
  currentOption: string;
  update?: (option: string) => void;
}

export const ConfigOption = ({ description, currentOption, options, update }: ConfigDetail) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td>{t(description)}:</td>
      <td>
        <Select style={{ minWidth: '10rem' }} value={currentOption} onChange={update}>
          {options.map((option) => (
            <Select.Option key={option} value={option}>
              {t(option)}
            </Select.Option>
          ))}
        </Select>
      </td>
    </tr>
  );
};
