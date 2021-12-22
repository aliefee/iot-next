import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function Sidebar() {

	const router = useRouter();

  return (
    <>
    <div className={styles.sidebar}>
    	<Link href="/">
		  	<a className={router.pathname == "/" ? styles.active : ""}>
			  	<span class="iconify" data-icon="ci:home-fill"></span>
			  	<p className={styles.menutext}>Home</p>
		  	</a>
		  </Link>
		  <Link href="/water">
		  	<a className={router.pathname == "/water" ? styles.active : ""}>
			  	<span class="iconify" data-icon="healthicons:running-water"></span>
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
		  	<span class="iconify" data-icon="carbon:temperature-min"></span>
		  	<p className={styles.menutext}>Temperature</p>
		  	</a>
		  </Link>
		  <Link href="/about">
		  	<a className={router.pathname == "/about" ? styles.active : ""}>
		  	<span class="iconify" data-icon="bi:exclamation-circle"></span>
		  	<p className={styles.menutext}>About</p>
		  	</a>
		  </Link>
		</div>
    </>
  )
}