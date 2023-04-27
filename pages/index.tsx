import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
	return (
		<Layout title='Open Jira' >
			<Typography variant='h1' color={'primary'}>
				Hola mundo 
			</Typography>
		</Layout>
	)
}

export default HomePage
