import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Just Add Marmite</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='layout'>
				<header>
					<Link href='/'>
						<a>
							<h1>
								<span>Just Add</span>
								<span>Marmite</span>
							</h1>
							<h2>Esplahe a felicidade</h2>
						</a>
					</Link>
				</header>

				<div className='page-content'>{children}</div>

				<footer>
					<p>Copyright 2022 Just Add Marmite :)</p>
				</footer>
			</div>
		</>
	);
}
