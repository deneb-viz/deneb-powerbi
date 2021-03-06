import { TopLevelSpec } from 'vega-lite';
import {
    authorInfo,
    autoSizeConfigSimple,
    vegaDataModelRef,
    vegaLiteProviderInfo
} from '..';

export const vlScatterColored: TopLevelSpec = {
    $schema: vegaLiteProviderInfo,
    data: vegaDataModelRef(),
    config: {
        autosize: autoSizeConfigSimple()
    },
    mark: {
        type: 'point'
    },
    encoding: {
        x: {
            field: '__xAxis__',
            type: 'quantitative'
        },
        y: {
            field: '__yAxis__',
            type: 'quantitative'
        },
        color: {
            field: '__series__',
            type: 'nominal'
        }
    },
    usermeta: {
        information: {
            name: 'Colored Scatterplot',
            description:
                "A scatterplot, using numeric columns for X and Y axis values, and another column to categorize into color. If you're using a measure for an axis, ensure that you've added a column to produce a suitable row context.",
            author: authorInfo,
            uuid: 'a3392ab4-6cb4-4dae-81ed-62de931cf9b7',
            generated: '2021-03-26T00:00:00.000Z'
        },
        provider: 'vegaLite',
        dataset: [
            {
                key: '__xAxis__',
                name: 'X-Axis',
                description:
                    "Select a column or measure that will be used to position points along chart's X-Axis.",
                type: 'numeric',
                kind: 'any'
            },
            {
                key: '__yAxis__',
                name: 'Y-Axis',
                description:
                    "Select a column or measure that will be used to position points along chart's Y-Axis.",
                type: 'numeric',
                kind: 'any'
            },
            {
                key: '__series__',
                name: 'Series',
                description:
                    'Select a column that will be used to specify color for the points on the chart.',
                type: 'text',
                kind: 'column'
            }
        ]
    }
};
