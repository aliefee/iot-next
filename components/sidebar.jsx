import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';

export default function Sidebar() {

	const router = useRouter();

  return (
    <>
    <div className={styles.sidebar}>
    	<Link href="/">
		  	<a className={router.pathname == "/" ? styles.active : ""}>
			  	<Icon icon="ci:home-fill" />
			  	<p className={styles.menutext}>Home</p>
		  	</a>
		  </Link>
		  <Link href="/water">
		  	<a className={router.pathname == "/water" ? styles.active : ""}>
		  		<Icon icon="healthicons:running-water" />
			  	<p className={styles.menutext}>Water</p>
		  	</a>
		  </Link>
		  <Link href="/weight">
		  	<a className={router.pathname == "/weight" ? styles.active : ""}>
			  	<p className={styles.menutext}>Weight sens 2</p>
		  	</a>
		  </Link>
		  <Link href="/temperature">
		  	<a className={router.pathname == "/temperature" ? styles.active : ""}>
		  	<Icon icon="carbon:temperature-min" />
		  	<p className={styles.menutext}>Temperature</p>
		  	</a>
		  </Link>
		  <Link href="/about">
		  	<a className={router.pathname == "/about" ? styles.active : ""}>
		  	<Icon icon="bi:exclamation-circle" />
		  	<p className={styles.menutext}>About</p>
		  	</a>
		  </Link>
		</div>
    </>
  )
}