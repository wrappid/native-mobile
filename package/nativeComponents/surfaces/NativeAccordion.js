import { SCAccordion } from "../../styledComponents/surfaces/SCAccordion";

export default function NativeAccordion(props) {
  // -- console.log("props", props);
  const { onChange } = props;

  return (
    <SCAccordion
      title={props.children && props.children[0] ? props.children[0] : null}
      onPress={(ele) => {
        onChange(ele);
      }}
      {...props}
    >
      {props.children && props.children[1] ? props.children[1] : null}
    </SCAccordion>
  );
}
