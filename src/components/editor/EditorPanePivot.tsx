import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pivot, PivotItem } from '@fluentui/react-tabs';

import Debugger from '../../Debugger';
import { state } from '../../store';
import { updateSelectedOperation } from '../../store/visualReducer';
import { TEditorOperation } from '../../types';

const EditorPanePivot = () => {
    Debugger.log('Rendering Component: [EditorPanePivot]...');
    const { i18n, selectedOperation } = useSelector(state).visual,
        dispatch = useDispatch(),
        getTabId = (itemKey: string) => {
            return `editor-pivot-${itemKey}`;
        },
        handlePivotClick = (item: PivotItem) => {
            dispatch(
                updateSelectedOperation(item.props.itemKey as TEditorOperation)
            );
        };

    return (
        <div className='editor-pane-pivot'>
            <Pivot
                aria-label='Separately Rendered Content Pivot Example'
                selectedKey={selectedOperation}
                // eslint-disable-next-line react/jsx-no-bind
                onLinkClick={handlePivotClick}
                headersOnly={true}
                getTabId={getTabId}
                overflowBehavior='menu'
            >
                <PivotItem
                    headerText={i18n.getDisplayName('Editor_Role_Spec')}
                    itemKey='spec'
                    itemIcon='BarChartVertical'
                />
                <PivotItem
                    headerText={i18n.getDisplayName('Editor_Role_Config')}
                    itemKey='config'
                    itemIcon='EditStyle'
                />
                <PivotItem
                    headerText={i18n.getDisplayName('Editor_Role_Settings')}
                    itemKey='settings'
                    itemIcon='Settings'
                />
            </Pivot>
        </div>
    );
};

export default EditorPanePivot;