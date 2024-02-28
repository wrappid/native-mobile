import { SCTableHeadCell } from "../../styledComponents/dataDisplay/SCTableHeadCell";
import { SCBox } from "../../styledComponents/layouts/SCBox";

export default function NativeTableHeadCell(props) {
  const { children, ...restProps } = props;

  return (
    <>
      {typeof children === "string" ? (
        <SCTableHeadCell {...restProps}>{children}</SCTableHeadCell>
      ) : (
        <SCBox {...restProps}>
          {children}
        </SCBox>
      )}
    </>
  );
}