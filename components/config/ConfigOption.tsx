import { Select } from 'antd';

export interface ConfigDetail {
  mapping?: string;
  description: string;
  options: string[];
  currentOption: string;
  update?: (option: string) => void;
}

export const ConfigOption = ({ description, currentOption, options, update }: ConfigDetail) => (
  <tr>
    <td>{description}:</td>
    <td>
      <Select style={{ minWidth: '10rem' }} value={currentOption} onChange={update}>
        {options.map((option) => (
          <Select.Option key={option} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </td>
  </tr>
);
