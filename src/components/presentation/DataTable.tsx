import { motion } from "framer-motion";

interface TableRow {
  [key: string]: string | number;
}

interface DataTableProps {
  headers: string[];
  rows: TableRow[];
  highlightColumn?: string;
}

const DataTable = ({ headers, rows, highlightColumn }: DataTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: rowIndex * 0.05 }}
              className="hover:bg-secondary/30 transition-colors"
            >
              {headers.map((header, colIndex) => {
                const value = row[header.toLowerCase().replace(/ /g, '_')] ?? row[header] ?? '-';
                const isHighlighted = header === highlightColumn;
                return (
                  <td
                    key={colIndex}
                    className={`table-cell ${isHighlighted ? 'text-primary font-semibold' : ''}`}
                  >
                    {value}
                  </td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default DataTable;
