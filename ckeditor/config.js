/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function(config) {
	
	config.plugins = 'about,a11yhelp,basicstyles,bidi,blockquote,clipboard,colorbutton,colordialog,contextmenu,dialogadvtab,div,elementspath,enterkey,entities,filebrowser,find,flash,floatingspace,font,format,forms,horizontalrule,htmlwriter,image,iframe,indentlist,indentblock,justify,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,preview,print,removeformat,resize,save,scayt,selectall,showblocks,showborders,smiley,sourcearea,specialchar,stylescombo,tab,table,tabletools,templates,toolbar,undo,wsc,wysiwygarea';
	config.toolbarGroups = [
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
		{ name: 'forms' },
		{ name: 'links' },
		{ name: 'insert' },
		'/',
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];
	config.height = 600; //高度
	config.extraPlugins += (config.extraPlugins ? ',lineheight' : 'lineheight');
	CKEDITOR.config.toolbar_Full =
    [
        { name: 'document',        items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
        { name: 'clipboard',    items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
        { name: 'editing',        items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
        { name: 'forms',        items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
        '/',
        { name: 'basicstyles',    items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
        { name: 'paragraph',    items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
        { name: 'links',        items : [ 'Link','Unlink','Anchor' ] },
        { name: 'insert',        items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
        '/',
        { name: 'styles',        items : [ 'Styles','Format','Font','FontSize','lineheight' ] },
        { name: 'colors',        items : [ 'TextColor','BGColor' ] },
        { name: 'tools',        items : [ 'Maximize', 'ShowBlocks','-','About' ] }
    ];
	
};