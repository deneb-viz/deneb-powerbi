import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontIcon, Text, TooltipHost } from 'office-ui-fabric-react';

import Debugger from '../../Debugger';
import { state } from '../../store';
import { commandService } from '../../services';
import { buttonIconClass } from '../../config/styles';

const EditorHeadingExpanded = () => {
    Debugger.log('Rendering Component: [EditorHeadingExpanded]...');
    const { i18n, settings } = useSelector(state).visual,
        { position } = settings.editor,
        togglePane = () => {
            commandService.toggleEditorPane();
        },
        tooltip_i18_key = 'Tooltip_Collapse_Editor_Pane',
        iconName = position === 'left' ? 'ChevronLeft' : 'ChevronRight';

    return (
        <>
            <div
                className='editor-heading'
                aria-describedby={tooltip_i18_key}
                onClick={togglePane}
                role='button'
            >
                <Text
                    role='button'
                    variant='mediumPlus'
                    className='ms-fontWeight-semibold'
                >
                    {i18n.getDisplayName('Editor_Heading')}
                </Text>
            </div>
            <TooltipHost
                content={i18n.getDisplayName(tooltip_i18_key)}
                id={tooltip_i18_key}
            >
                <div
                    role='button'
                    className='editor-collapse'
                    onClick={togglePane}
                >
                    <FontIcon iconName={iconName} className={buttonIconClass} />
                </div>
            </TooltipHost>
        </>
    );
};

export default EditorHeadingExpanded;
