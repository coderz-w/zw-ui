export type SizeType = 'small' | 'middle' | 'large' | number | undefined;
interface baseSpaceProps {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
}

export type SpaceProps = baseSpaceProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof baseSpaceProps>;
