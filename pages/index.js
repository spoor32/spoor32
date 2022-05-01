import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SPOOR 32</title>
				<meta name='description' content='Offical landing page for SPOOR 32' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.background}>
				<Image
					src='/images/open-air-background.jpg'
					alt='Kasteel van Wippelgem achtergrond'
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
			</div>
			<main className={styles.main}>
				<Image
					src='/images/spoor32-logo.webp'
					alt='SPOOR 32 Logo'
					height={44}
					width={67}
					quality={100}
				/>
				{/* <div className={styles.title}>
					<h1>OPEN AIR 2022</h1>
					<Image
						src='/images/date.svg'
						alt='SPOOR 32 Logo'
						height={44}
						width={109}
						quality={100}
					/>
				</div> */}
			</main>
		</div>
	);
}
