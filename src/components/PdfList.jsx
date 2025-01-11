import React from 'react'
import pdfs from '../api/Pdfs.json'
import Container from './Reusable/Container'
import Button from './Reusable/Button'

const PdfList = () => {
    return (
        <div>
            <Container className='my-20'>
                <h1 className='text-3xl text-brandDark-800 dark:text-brandDark-100 font-bold text-center mt-20'>PDF List</h1>
                <div className='flex flex-wrap gap-4 p-4 place-content-center'>
                    {pdfs.map((pdf) => (
                        <div key={pdf.id} className='relative overflow-hidden bg-white dark:bg-brandDark-800 p-4 rounded-xl w-fit border border-brandDark-300 dark:border-brandDark-700 gap-4 flex flex-col'>
                            {pdf.type && <p className='absolute w-fit right-0 top-0 text-[10px] bg-brandBlue-500 text-white px-2 py-1 rounded-bl-xl drop-shadow-md select-none'>{pdf.type}</p>}
                            <h2 className='text-xl text-brandDark-800 dark:text-brandDark-100 font-bold'>PDF {pdf.id}</h2>
                            <div className='w-fit overflow-hidden rounded-xl'>
                                <iframe
                                    src={pdf.url}
                                    title={`PDF Preview: ${pdf.filename}`}
                                    className='border border-brandDark-300 dark:border-brandDark-700'>

                                </iframe>
                            </div>
                            <div className='flex gap-4'>
                                <a
                                    href={pdf.url}
                                    download={pdf.filename}>
                                    <Button>Download</Button>
                                </a>
                                <a
                                    href={pdf.url}>
                                    <Button variant='secondary'>View</Button>
                                </a>

                            </div>
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default PdfList