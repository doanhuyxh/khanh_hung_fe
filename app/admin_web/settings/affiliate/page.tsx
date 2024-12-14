'use client'

import { Tiptap, EditorCkeditor, EditorReactQuill } from "@/app/components/Editor";
import { useState } from "react";
export default function Affiliate() {
    const [value, setValue] = useState('');
    const handleEditorChange = (content: string) => {
        setValue(content);
    }
    return (
        <div>
            <EditorReactQuill value={value} onChange={handleEditorChange} />
        </div>
    )
}