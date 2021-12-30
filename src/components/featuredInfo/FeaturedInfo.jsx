import React from "react";
import './FeaturedInfo.css';
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";


export default () => {
    return(
        <div className="featured">
            <div className="featured--item">
                <span className="fetured--title">Receita</span>
                <div className="featuredMoney--container">
                    <span className="featuredMoney">R$ 2,845</span>
                    <span className="featuredMoney--rate">
                        -1.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featured--sub">Comparação do último mês</span>
            </div>

            <div className="featured--item">
                <span className="fetured--title">Vendas</span>
                <div className="featuredMoney--container">
                    <span className="featuredMoney">R$ 4,255</span>
                    <span className="featuredMoney--rate">
                        -11.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featured--sub">Comparação do último mês</span>
            </div>

            <div className="featured--item">
                <span className="fetured--title">Custos</span>
                <div className="featuredMoney--container">
                    <span className="featuredMoney">R$ 2,845</span>
                    <span className="featuredMoney--rate">
                        +3.4 <ArrowUpward className="featuredIcon positive" />
                    </span>
                </div>
                <span className="featured--sub">Comparação do último mês</span>
            </div>
        </div>
    );
}