import { preset } from 'tailwind-preset';

import { ECOption, ReactECharts } from '@/components/ReactEcharts';
import { getPostureColor } from '@/constants/charts';
import { Mode, useTheme } from '@/theme/ThemeContext';
import { PostureSeverityType } from '@/types/common';
import { abbreviateNumber } from '@/utils/number';

function getChartOptions({
  data,
  theme,
}: {
  data: { [key: string]: number };
  theme: Mode;
}) {
  const option: ECOption = {
    backgroundColor: 'transparent',
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    series: [
      {
        type: 'pie',
        radius: ['65%', '90%'],
        itemStyle: {
          borderWidth: 2,
          borderColor: preset.theme.extend.colors.bg.card,
        },
        label: {
          position: 'center',
          formatter: function () {
            return abbreviateNumber(
              Object.keys(data).reduce((prev, curr) => {
                return prev + data[curr];
              }, 0),
            ).toString();
          },
          fontSize: '30px',
          color: preset.theme.extend.colors.text['input-value'],
          fontWeight: 600,
          fontFamily: preset.theme.extend.fontFamily.sans.join(','),
        },
        cursor: 'pointer',
        emphasis: {
          scale: false,
        },
        data: Object.keys(data)
          .filter((key) => data[key] > 0)
          .map((key) => {
            return {
              value: data[key],
              name: key,
              itemStyle: {
                color:
                  getPostureColor(theme)[key as PostureSeverityType] ??
                  getPostureColor(theme)['skip'],
              },
            };
          }),
      },
    ],
  };
  return option;
}

export const PostureScanResultsPieChart = ({
  data,
  onChartClick,
}: {
  data: { [key: string]: number };
  onChartClick: (data: { name: string; value: string | number | Date }) => void;
}) => {
  const { mode } = useTheme();
  if (!data) {
    return null;
  }
  const options = getChartOptions({ data, theme: mode });
  return <ReactECharts theme="dark" option={options} onChartClick={onChartClick} />;
};
