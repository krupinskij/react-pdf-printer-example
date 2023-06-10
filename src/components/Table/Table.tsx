import * as Styled from './Table.styles';

export type Align = 'left' | 'center' | 'right';

export type Column = {
  title: React.ReactNode;
  dataIndex: string;
  key?: string;
  style?: React.CSSProperties;
  align?: Align;
};

export type DataSource = {
  id: string | number;
  [key: string]: React.ReactNode;
};

type Props<T> = {
  columns: Column[];
  dataSource: T[];
  className?: string;
  isLoading?: boolean;
};

const Table = <T extends DataSource>({ columns, dataSource, className, isLoading }: Props<T>) => {
  return (
    <Styled.Wrapper isLoading={isLoading} className={className}>
      <Styled.Spinner />
      <Styled.Table>
        <colgroup>
          {columns.map(({ key, dataIndex, style }) => (
            <col key={key || dataIndex} style={style} />
          ))}
        </colgroup>
        <Styled.TableHead>
          <tr>
            {columns.map(({ key, title, dataIndex }) => (
              <th key={key || dataIndex}>
                <Styled.TableHeadCell>{title}</Styled.TableHeadCell>
              </th>
            ))}
          </tr>
        </Styled.TableHead>
        <tbody>
          {dataSource.map((row) => (
            <Styled.TableRow key={row.id}>
              {columns.map(({ dataIndex, key, align }) => (
                <td key={key || dataIndex}>
                  <Styled.TableRowCell $align={align || 'left'}>
                    {row[dataIndex]}
                  </Styled.TableRowCell>
                </td>
              ))}
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default Table;
