import React from 'react';
import classNames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Splash 1',
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas magna lacus, a placerat dolor
                maximus eget. Nullam vel sodales lectus, eget suscipit orci.
            </>
        ),
    },
    {
        title: 'Splash 2',
        description: (
            <>
                Praesent ac dolor vehicula, malesuada neque laoreet, tristique quam. Donec gravida eros arcu, vitae
                tincidunt lectus porta <code>&lt;?= 'yes'; &gt;</code> egestas. Donec lacinia velit vitae mi volutpat,
                tincidunt diam lacinia.
            </>
        ),
    },
    {
        title: 'Splash 3',
        description: (
            <>
                Cras luctus interdum elementum. Integer eu est et quam maximus pellentesque. Mauris eget ipsum sed
                lectus aliquam maximus id id augue.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classNames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const {siteConfig = {}} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">
            <header className={classNames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classNames('button button--outline button--secondary button--lg', styles.getStarted)}
                            to={useBaseUrl('docs/login')}>
                            Open documentation
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
