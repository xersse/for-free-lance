import React from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import "../../../styles/components/product/replique.css";

const Replique = () => {
  return (
    <div className="content-replique">
    <div className="replique">
      <Link className="d1-replique" to="/Répliques">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
                <p>réplique longues</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Répliques" className="d2-replique">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
               <p>réplique coutes</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Répliques" className="d3-replique">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
               <p>réplique de poings</p>
              </div>
            </div>
          </Tilty>
      </Link>
      <Link to="/Répliques" className="d4-replique">
          <Tilty className="tilty-replique" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
            <div className="inner-replique">
              <div className="text-replique">
               <p>réplique autre</p>
              </div>
            </div>
          </Tilty>
      </Link>
    </div>
    </div>
  );
};

export default Replique;
