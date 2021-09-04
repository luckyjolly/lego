import { Module } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { GlobalDataProps } from '.';
export interface EditorProps {
  components: ComponentData[]; // 供中间编辑器渲染的数组
  currentElement: string; // 当前编辑的是哪个元素，uuid
}
interface ComponentData {
  props: {
    [key: string]: any;
  };
  id: string;
  name: string;
}

export const testComponent: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello1' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3' } }
];
const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponent,
    currentElement: ''
  }
};
export default editor;
