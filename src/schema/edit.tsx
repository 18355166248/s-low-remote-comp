import { Slider } from "antd";
import { EditFieldValue } from "./types";
import TitleAlignConfig from "../EditForm/TitleAlignConfig";
import ColorPicker from "../EditForm/ColorPicker";

// 编辑组件的属性配置
const editField: EditFieldValue = {
  subLabelWidth: 70,
  list: [
    {
      key: "titleContent",
      name: "标题内容",
      type: "title",
      children: [
        {
          key: "title",
          name: "标题",
          type: "Input",
        },
        {
          key: "subTitle",
          name: "副标题",
          type: "Input",
        },
      ],
    },
    {
      key: "titleFlex",
      name: "标题布局",
      type: "title",
      children: [
        {
          key: "align",
          name: "布局选择",
          type: "custom",
          component: (props: any) => <TitleAlignConfig {...props} />,
        },
      ],
    },
    {
      key: "titleStyle",
      name: "标题样式",
      type: "title",
      children: [
        {
          key: "paddingX",
          name: "左右边距",
          type: "custom",
          component: (props: any) => <Slider min={0} max={100} {...props} />,
        },
        {
          key: "paddingY",
          name: "上下边距",
          type: "custom",
          component: (props: any) => <Slider min={0} max={100} {...props} />,
        },
        {
          key: "titleFontSize",
          name: "标题字体",
          type: "custom",
          component: (props: any) => <Slider min={10} max={50} {...props} />,
        },
        {
          key: "subTitleFontSize",
          name: "副标题字体",
          type: "custom",
          component: (props: any) => <Slider min={10} max={50} {...props} />,
        },
        {
          key: "titleColor",
          name: "标题颜色",
          type: "custom",
          component: (props: any) => <ColorPicker {...props} />,
        },
        {
          key: "subTitleColor",
          name: "副标题颜色",
          type: "custom",
          component: (props: any) => <ColorPicker {...props} />,
        },
        {
          key: "backgroundColor",
          name: "背景色",
          type: "custom",
          component: (props: any) => <ColorPicker {...props} />,
        },
      ],
    },
  ],
};

export default editField;
