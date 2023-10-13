import loader from '@monaco-editor/loader';

export default async function monacoEditor(node, options){
    const monacoEditor = await import('monaco-editor');
    loader.config({ monaco: monacoEditor.default });
    const monaco = await loader.init();
    const editor = monaco.editor.create(node, {
        automaticLayout: true,
    });
    const model = monaco.editor.createModel(options.code, options.language);
    editor.setModel(model);
    return {
        update(){
            editor.layout();
        },
        destroy(){
            model?.dispose();
            editor?.dispose();
        }
    }
}