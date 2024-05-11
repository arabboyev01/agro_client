import { CChart } from '@coreui/react-chartjs'

const CHartComponent = () => {
    return (
        <CChart
            type="bar"
            style={{ height: "700px", width: "100%" }}
            data={{
                labels: ['Products', 'Orders', 'Soils', 'Sales', 'Map'],
                datasets: [
                    {
                        label: "May statistics",
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                    },
                ],
            }
            }
            options={{
                plugins: {
                    legend: {
                        labels: {
                            color: "grey",
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: "grey",
                        },
                    }
                }
            }}
        />
    )
}

export default CHartComponent