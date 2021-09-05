import { mapValues } from 'lodash';
import { without } from 'lodash-es';
// interface DefaultPropsType {
//   [key: string]: {
//     props: object;
//     extraProps?: { [key: string]: any };
//   };
// }

// the common default props, all the components should have these props
export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
};
export const textDefaultProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
  width: '318px'
};
/**
 * 去掉非样式属性
 */
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
);
/**
 * 将业务组件属性格式，调整为 props 属性的格式
 * @param props 业务组件属性
 * @returns props 属性的格式的属性
 */
export const transformToComponentProps = <T extends { [key: string]: any }>(props: T) => {
  // extends 约束泛型类型

  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    };
  });
};
