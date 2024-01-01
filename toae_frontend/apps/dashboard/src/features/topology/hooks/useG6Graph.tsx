import G6 from '@antv/g6';
import { useEffect, useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { colors, preset } from 'tailwind-preset';

import { g6Toolbar } from '@/components/graph/plugin';
import {
  G6Graph,
  G6GraphData,
  G6GraphOptionsWithoutContainer,
} from '@/features/topology/types/graph';
import { Mode, useTheme } from '@/theme/ThemeContext';

const graphModeEnableOptimize = (mode: string) => {
  return {
    type: mode,
    enableOptimize: true,
    sensitivity: 0.7,
  };
};

const getEdgeStyles = ({ active, theme }: { active: boolean; theme: Mode }) => {
  if (!active) {
    return {
      lineWidth: 1.5,
      stroke: colors[theme].brand.blue,
      endArrow: {
        path: G6.Arrow.triangle(4, 5, 8),
        d: 10,
        fill: colors[theme].brand.blue,
        stroke: colors[theme].brand.blue,
      },
    };
  }
  return {
    lineWidth: 2.5,
    shadowBlur: 14,
    shadowColor: theme === 'dark' ? '#8AB9FF' : '#8AB9FF',
    stroke: colors[theme].accent.accent,
    endArrow: {
      path: G6.Arrow.triangle(4, 5, 8),
      d: 10,
      fill: colors[theme].accent.accent,
      stroke: colors[theme].accent.accent,
    },
  };
};

const getLabelBgStyles = ({ active, theme }: { active: boolean; theme: Mode }) => {
  if (!active) {
    return {
      fill: 'transparent',
      fillOpacity: 1,
      padding: [2, 4, 2, 4],
      radius: 3,
    };
  }

  return {
    fill: colors[theme].bg['breadcrumb-bar'],
    fillOpacity: 1,
    padding: [2, 4, 2, 4],
    radius: 3,
  };
};

const getLabelStyles = ({ active, theme }: { active: boolean; theme: Mode }) => {
  if (!active) {
    return {
      fill: colors[theme].text['text-and-icon'],
      fontFamily: preset.theme.extend.fontFamily.body.join(','),
      fontSize: 13,
      fontWeight: 300,
      background: getLabelBgStyles({ active, theme }),
    };
  }

  return {
    fill: colors[theme].text['input-value'],
    fontFamily: preset.theme.extend.fontFamily.body.join(','),
    fontSize: 13,
    fontWeight: 700,
    background: getLabelBgStyles({ active, theme }),
  };
};

const getNodeStyles = ({ active, theme }: { active: boolean; theme: Mode }) => {
  if (!active) {
    return {
      lineWidth: 0,
      fill: colors[theme].bg['map-node'],
    };
  }
  return {
    lineWidth: 2,
    shadowBlur: 10,
    shadowColor: colors[theme].accent.accent,
    stroke: colors[theme].accent.accent,
    fill: colors[theme].bg['map-node'],
  };
};

const getDefaultOptions = (theme: Mode): G6GraphOptionsWithoutContainer => {
  return {
    animate: false,
    fitCenter: true,
    groupByTypes: false,
    defaultNode: {
      type: 'circle',
      size: 45,
      style: {
        ...getNodeStyles({ active: false, theme }),
        'node-label': getLabelStyles({ active: false, theme }),
        'node-label-bg': getLabelBgStyles({ active: true, theme }),
      },
      labelCfg: {
        position: 'bottom',
        offset: 12,
        style: getLabelStyles({ active: false, theme }),
      },
    },
    defaultEdge: {
      type: 'cubic',
      style: getEdgeStyles({ active: false, theme }),
    },
    defaultCombo: {
      padding: 0,
      style: {
        fill: colors[theme].bg['map-cluster'],
        fillOpacity: 0.25,
        lineWidth: 1.5,
        stroke: theme === 'dark' ? colors['df-gray'][500] : colors[theme].brand.blue,
        strokeOpacity: 0.25,
      },
    },
    nodeStateStyles: {
      active: {
        ...getNodeStyles({ active: true, theme }),
        'node-label': getLabelStyles({ active: true, theme }),
        'node-label-bg': getLabelBgStyles({ active: true, theme }),
      },
    },
    comboStateStyles: {
      active: {},
      inactive: {},
    },
    edgeStateStyles: {
      active: getEdgeStyles({ active: true, theme }),
    },
    modes: {
      default: [
        graphModeEnableOptimize('drag-canvas'),
        graphModeEnableOptimize('zoom-canvas'),
        {
          type: 'drag-node',
          onlyChangeComboSize: true,
        },
        'drag-combo',
      ],
    },
  } satisfies G6GraphOptionsWithoutContainer;
};

export const useG6Graph = <D,>(
  graphContainer: HTMLElement | null,
  data: D,
  options: G6GraphOptionsWithoutContainer = {},
) => {
  const [graph, setGraph] = useState<G6Graph | null>(null);
  const { mode } = useTheme();

  useUpdateEffect(() => {
    window.location.reload();
  }, [mode]);

  useEffect(() => {
    if (!graphContainer || graph) {
      return;
    }
    const plugins = options.plugins ?? [];
    const width = graphContainer.offsetWidth;
    const height = graphContainer.offsetHeight;
    const g6Graph = new G6.Graph({
      plugins: [...plugins, g6Toolbar],
      ...getDefaultOptions(mode),
      ...options,
      container: graphContainer,
      width,
      height,
    });
    g6Graph.data(data as G6GraphData);
    g6Graph.render();
    setGraph(g6Graph);
  }, [graphContainer]);

  return { graph };
};
