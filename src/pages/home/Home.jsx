import React from "react";
import './Home.css';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { UserData } from "../../dummyData";

export default () => {
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart data={UserData} title="Análise de Usuários" grid dataKey="Usuarios_ativos" />
            <div className="home--widgets"></div>
        </div>
    );
}