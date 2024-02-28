import { SCImageBackground } from "../../styledComponents/layouts/SCImageBackground";

export default function NativeImageBackground(props) {
  return (
    <SCImageBackground
      {...props}
      style={{ ...(props.style || {}), flex: 1, justifyContent: "center" }}>
      {props.children}
    </SCImageBackground>
  );
}
