import { useMemo } from 'react';
import './style.css';

const mockValues = [
    { position: 1, nick: "gabrielNZT", score: 10 },
    { position: 1, nick: "gabrielNZT", score: 10 },
    { position: 1, nick: "gabrielNZT", score: 10 },
    { position: 1, nick: "gabrielNZT", score: 10 },
    { position: 1, nick: "gabrielNZT", score: 10 },
    { position: 1, nick: "gabrielNZT", score: 10 },
    { position: 1, nick: "gabrielNZT", score: 10 },
]

const Table = ({ limit, dataSource = mockValues }) => {
    const properties = ['posição', 'nick', 'pontos'];

    const dataToRender = useMemo(() => {
        const maxValue = limit || dataSource.length;
        const array = [];

        for (let index = 0; index < maxValue; index++) {
            const valueToPush = dataSource[index];
            if (valueToPush) {
                array.push(valueToPush);
            }
        }

        return array
    }, [dataSource, limit]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div className="table">
                <div className="table-header">
                    {properties.map((property) => (
                        <div className="header__item" key={property}>
                            <a
                                id={property}
                                className={'filter__link'}
                            >
                                {property}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="table-content">

                    {dataToRender.map((row, index) => {
                        return (
                            <div className="table-row" key={index}>
                                <div className="table-data position">{row.position}</div>
                                <div className="table-data">{row.nick}</div>
                                <div className="table-data">{row.score}</div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </div>
    );
};

export default Table;
