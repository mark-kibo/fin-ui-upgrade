import React from 'react'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { ScatterData } from '../../streamData'

const Reports = () => {
    return (

        <>
            <div className='w-full shadow-lg  md:col-span-1 relatiive lg:h-[50vh] h-[50vh] m-auto  p-2 border rounded-lg bg-[#ffffff]'>
                {/* <div className='flex items-center justify-center'>
                    <h2 className='text-gray-500 font-medium'>Reports</h2>
                </div> */}
                <div className='h-full w-auto' >
                    <ResponsiveScatterPlot
                        data={ScatterData}
                        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
                        xScale={{ type: 'linear', min: 0, max: 'auto' }}
                        xFormat=">-.2f"
                        yScale={{ type: 'linear', min: 0, max: 'auto' }}
                        yFormat=">-.2f"
                        colors={{ scheme: 'set2' }}
                        blendMode="multiply"
                        nodeSize={8}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'weight',
                            legendPosition: 'middle',
                            legendOffset: 46
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'size',
                            legendPosition: 'middle',
                            legendOffset: -60
                        }}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 130,
                                translateY: 0,
                                itemWidth: 100,
                                itemHeight: 12,
                                itemsSpacing: 5,
                                itemDirection: 'left-to-right',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        </>


    )
}

export default Reports
