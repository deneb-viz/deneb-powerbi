import powerbi from 'powerbi-visuals-api';
import IViewport = powerbi.IViewport;

import {
    getFocusStyle,
    getTheme,
    IChoiceGroupStyles,
    IChoiceGroupOptionStyles,
    IDropdownStyles,
    ILinkStyles,
    IStackItemStyles,
    IStackStyles,
    IStackTokens,
    ITheme,
    mergeStyles,
    mergeStyleSets,
    FontSizes,
    FontWeights,
    ITextFieldStyles,
    IDetailsListStyles,
    IStyleSet,
    IPivotStyles
} from '@fluentui/react';

import { theme } from './theme';
import {
    IButtonStyles,
    ICommandBarStyles,
    ISeparatorStyles,
    ITextStyles
} from 'office-ui-fabric-react';

export {
    actionButtonStyles,
    buttonIconClass,
    choiceGroupStyles,
    choiceItemStyles,
    choiceStackTokens,
    commandBarStyles,
    commandBarButtonStyles,
    detailListStyles,
    editorPaneExpandedStackStyles,
    editorPaneExpandedStackItemStyles,
    editorPaneExpandedOuterStackTokens,
    editorPaneExpandedInnerStackTokens,
    errorVerticalStackStyles,
    exportPivotAssistiveTextStyles,
    exportPivotAssistiveToastTextStyles,
    exportPivotStyles,
    iconButtonStyles,
    landingHorizontalSeparatorStyles,
    landingResourceInnerStackTokens,
    landingVerticalOuterStackTokens,
    landingVerticalInnerStackTokens,
    landingVerticalStackOuterStyles,
    landingVerticalStackItemStyles,
    landingVerticalStackStyles,
    landingVisualNameStyles,
    landingVisualDescriptionStyles,
    landingVisualVersionStyles,
    landingSectionHeadingStyles,
    linkStyles,
    modalDialogCloseIconStyles,
    modalDialogContentStyles,
    modalDialogStackStyles,
    modalDialogStackItemStyles,
    modalDialogStackItemWrapperStyles,
    modalDialogInnerStackTokens,
    primaryButtonStyles,
    templateExportInfoStackTokens,
    templatePickerDropdownStyles,
    templatePickerItemListStyles,
    templatePickerStackStyles,
    templatePickerStackItemStyles,
    templatePickerStackSeparatorStyles,
    templatePickerStackItemListStyles,
    templatePickerNonShrinkingStackItemStyles,
    templatePickerStackTokens,
    templateTypeIconStyles,
    templateTypeIconOptionStyles,
    templateTypeInfoIconStyles,
    textFieldStyles
};

const defaultTheme: ITheme = getTheme();

// Landing page
const landingVisualNameStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.semibold,
            fontSize: FontSizes.xLargePlus,
            color: theme.palette.neutralPrimary
        }
    },
    landingVisualDescriptionStyles: ITextStyles = {
        root: {
            fontSize: FontSizes.medium,
            color: theme.palette.neutralPrimary
        }
    },
    landingVisualVersionStyles: ITextStyles = {
        root: {
            fontSize: FontSizes.smallPlus,
            color: theme.palette.neutralSecondary
        }
    },
    landingSectionHeadingStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.semibold,
            fontSize: FontSizes.mediumPlus,
            color: theme.palette.neutralPrimary
        }
    },
    landingVerticalInnerStackTokens: IStackTokens = {
        childrenGap: 5,
        padding: 10
    },
    landingVerticalOuterStackTokens: IStackTokens = {
        padding: 5
    },
    landingResourceInnerStackTokens: IStackTokens = {
        childrenGap: 25,
        padding: 10
    },
    landingVerticalStackOuterStyles: IStackStyles = {
        root: {
            height: '100vh'
        }
    },
    landingVerticalStackStyles: IStackStyles = {
        root: {
            height: '100%',
            width: '100%',
            background: theme.palette.neutralLighterAlt,
            borderColor: theme.palette.neutralLight,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5
        }
    },
    errorVerticalStackStyles: IStackStyles = {
        root: {
            height: '100%',
            width: '100%',
            background: theme.palette.neutralLighterAlt,
            borderColor: theme.palette.redDark,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5
        }
    },
    landingVerticalStackItemStyles: IStackItemStyles = {
        root: {
            display: 'block'
        }
    },
    landingHorizontalSeparatorStyles: ISeparatorStyles = {
        root: {
            width: '100%',
            selectors: {
                '::before': {
                    backgroundColor: theme.palette.neutralLight
                }
            }
        },
        content: {}
    };

// Buttons
const buttonIconClass = mergeStyles({
        fontSize: 12,
        height: 20,
        width: 20,
        cursor: 'pointer'
    }),
    primaryButtonStyles: IButtonStyles = {
        root: {
            borderRadius: 0
        },
        label: {
            color: theme.palette.black,
            fontWeight: FontWeights.regular
        }
    },
    iconButtonStyles: IButtonStyles = {
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            selectors: {
                '&:hover': { background: theme.palette.neutralLight },
                '&:focus': { background: theme.palette.neutralLighterAlt }
            }
        },
        icon: { color: theme.palette.neutralPrimary },
        iconHovered: { color: theme.palette.neutralDark },
        iconPressed: { color: theme.palette.neutralDark },
        label: { color: theme.palette.neutralPrimary },
        labelHovered: { color: theme.palette.neutralDark }
    },
    actionButtonStyles: IButtonStyles = {
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            padding: 10,
            selectors: {
                '&:hover': { background: theme.palette.neutralLight },
                '&:focus': { background: theme.palette.neutralLighterAlt }
            }
        },
        icon: { color: theme.palette.neutralPrimary },
        iconHovered: { color: theme.palette.neutralDark },
        iconPressed: { color: theme.palette.neutralDark },
        label: { color: theme.palette.neutralPrimary },
        labelHovered: { color: theme.palette.neutralDark }
    },
    templateTypeIconStyles: IButtonStyles = {
        icon: { color: theme.palette.neutralPrimary },
        iconHovered: { color: theme.palette.neutralDark },
        iconPressed: { color: theme.palette.neutralDark }
    },
    templateTypeIconOptionStyles: IButtonStyles = {
        ...templateTypeIconStyles,
        ...{
            root: {
                marginRight: '8px',
                cursor: 'pointer'
            }
        }
    },
    templateTypeInfoIconStyles: IButtonStyles = {
        root: {
            cursor: 'pointer'
        }
    };

// Hyperlinks
const linkStyles: ILinkStyles = {
    root: {
        color: theme.palette.themeDark
    }
};

// Editor pane (expanded) layout
const editorPaneExpandedStackStyles: IStackStyles = {
        root: {
            height: '100vh',
            backgroundColor: theme.palette.neutralLighterAlt,
            border: `1px solid ${theme.palette.neutralLight}`
        }
    },
    editorPaneExpandedStackItemStyles: IStackItemStyles = {
        root: {
            display: 'flex'
        }
    },
    editorPaneExpandedOuterStackTokens: IStackTokens = { childrenGap: 5 },
    editorPaneExpandedInnerStackTokens: IStackTokens = {
        childrenGap: 5,
        padding: 10
    };

// Command bar
const commandBarStyles: ICommandBarStyles = {
        root: {
            backgroundColor: theme.palette.neutralLighterAlt,
            padding: 0
        }
    },
    commandBarButtonStyles: IButtonStyles = {
        root: {
            backgroundColor: theme.palette.neutralLighterAlt
        },
        rootDisabled: {
            backgroundColor: theme.palette.neutralLighterAlt
        },
        icon: { color: theme.palette.neutralPrimary },
        iconHovered: { color: theme.palette.neutralDark },
        iconPressed: { color: theme.palette.neutralDark },
        iconChecked: { color: theme.palette.neutralDark }
    };

// Horizontal choice group (settings pivot)
const choiceGroupStyles: IChoiceGroupStyles = {
        flexContainer: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    choiceItemStyles: IChoiceGroupOptionStyles = {
        root: {
            paddingRight: '16px'
        }
    },
    choiceStackTokens: IStackTokens = { childrenGap: 10 };

// Template picker items
const templatePickerItemListStyles = mergeStyleSets({
        itemCell: [
            getFocusStyle(defaultTheme, { inset: -1 }),
            {
                minHeight: 34,
                padding: 10,
                boxSizing: 'border-box',
                borderBottom: `1px solid ${theme.palette.neutralLighterAlt}`,
                display: 'flex',
                selectors: {
                    '&:hover': { background: theme.palette.neutralLight },
                    '&:focus': { background: theme.palette.neutralLighterAlt },
                    '&[tabindex="0"]': {
                        background: theme.palette.neutralLighterAlt
                    }
                }
            }
        ],
        itemImage: {
            flexShrink: 0
        },
        itemContent: {
            overflow: 'hidden',
            flexGrow: 1,
            fontSize: FontSizes.smallPlus
        },
        itemName: [
            {
                fontSize: FontSizes.medium,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        ],
        itemIndex: {
            fontSize: FontSizes.small,
            color: theme.palette.neutralTertiary,
            marginBottom: 10
        },
        chevron: {
            alignSelf: 'center',
            marginLeft: 10,
            color: theme.palette.neutralTertiary,
            fontSize: FontSizes.large,
            flexShrink: 0
        }
    }),
    templatePickerStackStyles: IStackStyles = {
        root: {
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            maxWidth: '100%'
        }
    },
    templatePickerStackItemStyles: IStackItemStyles = {
        root: {
            display: 'flex',
            maxHeight: '100%'
        }
    },
    templatePickerStackSeparatorStyles: IStackStyles = {
        ...templatePickerStackItemStyles,
        ...{
            root: { width: 15 }
        }
    },
    templatePickerStackItemListStyles: IStackItemStyles = {
        ...templatePickerStackItemStyles,
        ...{
            root: { overflowY: 'auto', width: 300, maxWidth: 300 }
        }
    },
    templatePickerNonShrinkingStackItemStyles: IStackItemStyles = {
        ...templatePickerStackStyles,
        ...{
            root: {
                overflowY: 'auto'
            }
        }
    },
    templatePickerStackTokens: IStackTokens = {
        childrenGap: 50
    },
    templateExportInfoStackTokens: IStackTokens = {
        childrenGap: 5
    },
    templatePickerDropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300 }
    };

// Modal dialog layout
const modalDialogContentStyles = (viewport: IViewport) => {
        const dialogHeight = viewport.height * 0.8,
            dialogWidth = viewport.width * 0.8;
        return mergeStyleSets({
            container: {
                display: 'flex',
                flexFlow: 'column nowrap',
                overflowY: 'hidden',
                alignItems: 'stretch',
                height: dialogHeight,
                width: dialogWidth
            },
            header: [
                {
                    flex: '1 1 auto',
                    borderTop: `4px solid ${theme.palette.themePrimary}`,
                    color: theme.palette.neutralPrimary,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: FontSizes.xLargePlus,
                    fontWeight: FontWeights.semibold,
                    padding: '12px 12px 14px 24px'
                }
            ],
            body: {
                flex: '4 4 auto',
                padding: '0 24px 0px 24px',
                overflowY: 'hidden',
                selectors: {
                    p: { margin: '14px 0' },
                    'p:first-child': { marginTop: 0 },
                    'p:last-child': { marginBottom: 0 }
                },
                height: `calc(100% - 4px - 12px - 14px - ${FontSizes.xLargePlus} - 14px)`
            }
        });
    },
    modalDialogCloseIconStyles = {
        root: {
            color: theme.palette.neutralPrimary,
            marginLeft: 'auto',
            marginTop: '4px',
            marginRight: '2px'
        },
        rootHovered: {
            color: theme.palette.neutralDark
        }
    },
    modalDialogStackStyles: IStackStyles = {
        root: {
            height: '100%'
        }
    },
    modalDialogStackItemStyles: IStackItemStyles = {
        root: {
            display: 'flex'
        }
    },
    modalDialogStackItemWrapperStyles: IStackItemStyles = {
        root: {
            display: 'flex',
            minHeight: 0,
            paddingTop: '10px'
        }
    },
    modalDialogInnerStackTokens: IStackTokens = {
        childrenGap: 15,
        padding: 10
    };

// Export dialog - pivot-level assistive text
const exportPivotAssistiveTextStyles: ITextStyles = {
        root: {
            display: 'inline-block',
            paddingTop: '8px'
        }
    },
    exportPivotAssistiveToastTextStyles: ITextStyles = {
        root: {
            display: 'inline-block',
            paddingTop: '8px',
            paddingRight: '8px'
        }
    },
    exportPivotStyles: Partial<IStyleSet<IPivotStyles>> = {
        itemContainer: {
            marginTop: '10px',
            height: '100%'
        }
    };

// Form fields
const textFieldStyles: Partial<ITextFieldStyles> = {
        root: { marginLeft: 35, width: 300 }
    },
    detailListStyles: IDetailsListStyles = {
        root: {},
        headerWrapper: {
            root: {
                borderBottom: null
            }
        },
        focusZone: {
            borderBottom: null
        },
        contentWrapper: {}
    };
