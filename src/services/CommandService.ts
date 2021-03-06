import * as ace from 'ace-builds';
import Ace = ace.Ace;

import Debugger, { standardLog } from '../Debugger';
import { propertyService, specificationService, templateService } from '.';
import store from '../store';
import {
    toggleAutoApply,
    toggleEditorPane,
    fourd3d3d,
    updateExportDialog,
    updateSelectedOperation
} from '../store/visualReducer';
import {
    newExportTemplateMetadata,
    updateSelectedTemplate,
    updateTemplateExportState
} from '../store/templateReducer';
import {
    ICommandService,
    TEditorOperation,
    TModalDialogType,
    TSpecProvider,
    TSpecRenderMode
} from '../types';
import { visualMetadata } from '../config';

const owner = 'CommandService';

export class CommandService implements ICommandService {
    constructor() {
        Debugger.log(`Instantiating new ${owner}...`);
    }

    @standardLog()
    updateProvider(provider: TSpecProvider) {
        Debugger.log('Updating spec provider in visual properties...');
        const replace = propertyService.resolveObjectProperties('vega', [
            { name: 'provider', value: provider }
        ]);
        propertyService.updateObjectProperties(replace);
    }

    @standardLog()
    updateRenderMode(renderMode: TSpecRenderMode) {
        Debugger.log('Updating spec render mode in visual properties...');
        const replace = propertyService.resolveObjectProperties('vega', [
            { name: 'renderMode', value: renderMode }
        ]);
        propertyService.updateObjectProperties(replace);
    }

    @standardLog()
    updateBooleanProperty(name: string, value: boolean) {
        Debugger.log('Updating boolean prop...');
        const replace = propertyService.resolveObjectProperties('vega', [
            { name: name, value: value }
        ]);
        propertyService.updateObjectProperties(replace);
    }

    @standardLog()
    applyChanges() {
        Debugger.log('Applying changes...');
        specificationService.persist();
    }

    @standardLog()
    toggleAutoApply() {
        Debugger.log('Toggling auto-apply...');
        this.applyChanges();
        store.dispatch(toggleAutoApply());
    }

    @standardLog()
    repairFormatJson() {
        Debugger.log('Fixing spec and config...');
        specificationService.fixAndFormat();
    }

    @standardLog()
    createNewSpec() {
        Debugger.log('Opening new spec dialog...');
        Debugger.log('Flagging modal dialog for open...');
        propertyService.updateObjectProperties(
            propertyService.resolveObjectProperties('vega', [
                { name: 'isNewDialogOpen', value: true }
            ])
        );
        store.dispatch(updateSelectedTemplate(0));
    }

    @standardLog()
    createExportableTemplate() {
        Debugger.log('Opening export spec dialog...');
        Debugger.log('Flagging modal dialog for open...');
        // TODO: this does not take the non-persisted spec, so needs tying-in with the dirty flag work (#10)
        store.dispatch(updateExportDialog(true));
    }

    @standardLog()
    closeModalDialog(type: TModalDialogType) {
        Debugger.log('Closing modal dialog...');
        switch (type) {
            case 'new': {
                propertyService.updateObjectProperties(
                    propertyService.resolveObjectProperties('vega', [
                        { name: 'isNewDialogOpen', value: false }
                    ])
                );
                break;
            }
            case 'export': {
                store.dispatch(updateExportDialog(false));
                store.dispatch(updateTemplateExportState('None'));
                break;
            }
        }
    }

    @standardLog()
    openEditorPivotItem(operation: TEditorOperation) {
        Debugger.log(`Attempting to open editor pivot item: ${operation}...`);
        store.dispatch(updateSelectedOperation(operation));
    }

    @standardLog()
    openHelpSite() {
        Debugger.log('Launching support URL...', visualMetadata.supportUrl);
        const { launchUrl } = store.getState().visual;
        launchUrl(visualMetadata.supportUrl);
    }

    @standardLog()
    toggleEditorPane() {
        Debugger.log('Toggling pane expansion...');
        this.applyChanges();
        store.dispatch(toggleEditorPane());
    }

    fourd3d3d() {
        store.dispatch(fourd3d3d(true));
    }
}
