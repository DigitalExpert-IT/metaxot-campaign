interface IHexagonal {
  padding?: {
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
  };
  margin?: {
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
  };
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  size?: string;
  color?: string;
  customStyle?: object;
}

const Hexagonal: React.FC<IHexagonal> = ({
  padding = {},
  margin = {},
  top = 0,
  left = 0,
  right = 0,
  bottom = 0,
  size = "160px",
  color = "transparent",
  customStyle = {},
}) => {
  return (
    <div
      style={{
        ...padding,
        ...margin,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        fontSize: size,
        color: color,
        position: "relative",
        ...customStyle,
      }}
    >
      &#x2B22;
    </div>
  );
};

export default Hexagonal;
