import { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

function App() {

  const [data, setdata] = useState([]);

  useEffect(async () => {
    try {
      let body = {
        tipoMomentoContable: 4,
        fechaFin: "2020-03-30",
        objetoGasto: "",
        where: "",
        divideEntre: 1,
        tipoDeCuentas: 1
      };
      let { data } = await axios.post('http://127.0.0.1:4000', body, { headers: { 'Access-Control-Allow-Origin': '*' } });
      console.log(data);
      setdata(data);
    } catch (err) {
      console.error(err);
    }
  }, [])

const columns = [
  {
    title: 'RamoId',
    dataIndex: 'RamoId',
    key: 'RamoId',
  },
  {
    title: 'FuenteFin',
    dataIndex: 'FuenteFin',
    key: 'FuenteFin',
  },
  {
    title: 'ObjetoGastoId',
    dataIndex: 'ObjetoGastoId',
    key: 'ObjetoGastoId',
  },
  {
    title: 'Nombre',
    dataIndex: 'Nombre',
    key: 'Nombre',
  },
  {
    title: 'PresupuestoVigente',
    dataIndex: 'PresupuestoVigente',
    key: 'PresupuestoVigente',
  },
  {
    title: 'Ene',
    dataIndex: 'Ene',
    key: 'Ene',
  },
  {
    title: 'Feb',
    dataIndex: 'Feb',
    key: 'Feb',
  },
  {
    title: 'Mar',
    dataIndex: 'Mar',
    key: 'Mar',
  },
  {
    title: 'Abr',
    dataIndex: 'Abr',
    key: 'Abr',
  },
  {
    title: 'May',
    dataIndex: 'May',
    key: 'May',
  },
  {
    title: 'Jun',
    dataIndex: 'Jun',
    key: 'Jun',
  },
  {
    title: 'Jul',
    dataIndex: 'Jul',
    key: 'Jul',
  },
  {
    title: 'Ago',
    dataIndex: 'Ago',
    key: 'Ago',
  },
  {
    title: 'Sep',
    dataIndex: 'Sep',
    key: 'Sep',
  },
  {
    title: 'Oct',
    dataIndex: 'Oct',
    key: 'Oct',
  },
  {
    title: 'Nov',
    dataIndex: 'Nov',
    key: 'Nov',
  },
  {
    title: 'Dic',
    dataIndex: 'Dic',
    key: 'Dic',
  },
  {
    title: 'Total',
    dataIndex: 'Total',
    key: 'Total',
  },
  {
    title: 'Diferencia',
    dataIndex: 'Diferencia',
    key: 'Diferencia',
  },
];

const datas = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
  return (
    <Table columns={columns} dataSource={data} />
  );
}

export default App;
