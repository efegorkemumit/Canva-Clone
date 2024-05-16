'use client'

import React from 'react'
import { CanvaEditor, EditorConfig } from 'canva-editor';
import { useState } from 'react';
import { data } from './sampleData';

const editorConfig: EditorConfig = {
    apis: {
      url: 'https://canva-editor-api.vercel.app/api',
      searchFonts: '/fonts',
      searchTemplates: '/templates',
      searchTexts: '/texts',
      searchImages: '/images',
      searchShapes: '/shapes',
      searchFrames: '/frames',
      templateKeywordSuggestion: '/template-suggestion',
      textKeywordSuggestion: '/text-suggestion',
      imageKeywordSuggestion: '/image-suggestion',
      shapeKeywordSuggestion: '/shape-suggestion',
      frameKeywordSuggestion: '/frame-suggestion',
    },
    placeholders: {
      searchTemplate: 'Search templates',
      searchText: 'Search texts',
      searchImage: 'Search images',
      searchShape: 'Search shapes',
      searchFrame: 'Search frames',
    },
    editorAssetsUrl: 'https://canva-editor-api.vercel.app/editor',
    imageKeywordSuggestions: 'animal,sport,love,scene,dog,cat,whale',
    templateKeywordSuggestions:
      'mother,sale,discount,fashion,model,deal,motivation,quote',
  };
  


const Canva = () => {
    const [saving, setSaving] = useState(false);
    const name = '';
    const handleOnChanges = (changes: any) => {
      console.log('On changes');
      console.log(changes);
  
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
      }, 1e3);
    };
  
    const handleOnDesignNameChanges = (newName: string) => {
      console.log('On name changes');
      console.log(newName);
  
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
      }, 1e3);
    };

  return (
    <CanvaEditor
      data={{
        name,
        editorConfig: data,
      }}
      config={editorConfig}
      saving={saving}
      onChanges={handleOnChanges}
      onDesignNameChanges={handleOnDesignNameChanges}
    />
  )
}

export default Canva