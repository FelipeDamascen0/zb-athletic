import { Menu } from '@/components/Menu';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Dashboard = () => {
  const options = {
    chart: {
      type: 'column',
      height: 255,
    },
    title: {
      text: 'Receita',
    },
    xAxis: {
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      max: 400,
      title: {
        text: 'Valor',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0;">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Valor',
        data: [100, 200, 300, 250, 350, 200, 150, 100, 200, 250, 300, 400],
        color: '#34D399',
      },
    ],
  };

  const optionsGastos = {
    chart: {
      type: 'column',
      height: 255,
    },
    title: {
      text: 'Gastos',
    },
    xAxis: {
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      max: 400,
      title: {
        text: 'Valor',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0;">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Valor',
        data: [100, 200, 300, 250, 350, 200, 150, 100, 200, 250, 300, 400],
        color: '#34D399',
      },
    ],
  };

  return (
    <div>
      <Menu />
      <div className="sm:flex  justify-center items-center w-screen mt-4 bg-white h-screen">
        <div className='mb-4 sm:mr-2 sm:mb-0 '>
          <HighchartsReact highcharts={Highcharts} options={options}   />
        </div>

        <div>
          <HighchartsReact highcharts={Highcharts} options={optionsGastos}  />
        </div>
      
      </div>
    </div>
  );
};

export default Dashboard;