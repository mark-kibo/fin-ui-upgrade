import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
}));


const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-6 gap-4 p-4 sm:w-full '>
            <div className='lg:col-span-2 col-span-1 shadow-lg bg-[#ffffff]  flex justify-between w-full  border p-4 rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$7846</p>
                    <p className='text-gray-600'>Daily Revenue</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+11%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 shadow-lg bg-white  flex justify-between w-full  border p-4 rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$1,437,876</p>
                    <p className='text-gray-600'>YTD Revenue</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 shadow-lg bg-white  flex justify-between w-full  border p-4 rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>11,784</p>
                    <p className='text-gray-600'>Customers</p>

                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+17%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards
