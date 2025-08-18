import * as React from 'react';
import {
  pieArcClasses,
  PieChart,
  PieChartProps,
  pieClasses,
} from '@mui/x-charts/PieChart';
import { rainbowSurgePalette } from '@mui/x-charts/colorPalettes';
import { useTheme } from '@mui/material/styles';

export default function PieCSSStyling() {
  const theme = useTheme();
  const palette = rainbowSurgePalette(theme.palette.mode);

  const data1 = [
    { label: 'Liquidity Pool', value: 60 },         // 60%
    { label: 'Community Rewards', value: 20 },      // 20%
    { label: 'Marketing & Development', value: 10 }, // 10%
    { label: 'Team & Advisors', value: 10 },        // 10%
  ];

  const data2 = [
    { label: 'Liquidity', value: 60, color: palette[0] },           // 60%
    { label: 'Community Phase 1', value: 2, color: palette[1] },   // 2%
    { label: 'Community Phase 2', value: 5, color: palette[1] },   // 5%
    { label: 'Community Phase 3', value: 5, color: palette[1] },   // 5%
    { label: 'Community Phase 4', value: 8, color: palette[1] },   // 8% (total 20%)
    { label: 'Marketing', value: 10, color: palette[2] },           // 10%
    { label: 'Team', value: 10, color: palette[3] },               // 10%
  ];

  const settings = {
    series: [
      {
        innerRadius: 0,
        outerRadius: 80,
        data: data1,
        highlightScope: { fade: 'global', highlight: 'item' },
        valueFormatter: (item: any) => `${Math.round(item.value)}%`,
      },
      {
        id: 'outer',
        innerRadius: 100,
        outerRadius: 120,
        data: data2,
        highlightScope: { fade: 'global', highlight: 'item' },
        valueFormatter: (item: any) => `${Math.round(item.value)}%`,
      },
    ],
    height: 300,
    hideLegend: true,
  } satisfies PieChartProps;

  return (
    <PieChart
      {...settings}
      sx={{
        [`& .${pieClasses.series}[data-series="outer"] .${pieArcClasses.root}`]: {
          opacity: 0.6,
        },
      }}
    />
  );
}
