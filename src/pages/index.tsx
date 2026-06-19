/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): JSX.Element {
    return (
        <Layout title='Welcome'>
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1 className="hero__title">Flexible &amp; Powerful Open Source<br/>Multi-Protocol Messaging</h1>
                        </div>
                        <div className={styles.heroLogo}>
                            <img src="/img/activemq_logo_white_vertical.png" alt="Apache ActiveMQ" />
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className={styles.description}>
                    <div className="container">
                        <p>
                            Apache ActiveMQ&reg; is the most popular open source, multi-protocol, Java-based message broker.
                            It supports industry standard protocols so users get the benefits of client choices across a broad range
                            of languages and platforms. Connect from clients written in JavaScript, C, C++, Python, .Net, and more.
                            Integrate your multi-platform applications using the ubiquitous <strong>AMQP</strong> protocol. Exchange
                            messages between your web applications using <strong>STOMP</strong> over websockets. Manage your IoT
                            devices using <strong>MQTT</strong>. Support your existing <strong>JMS</strong> infrastructure and beyond.
                            ActiveMQ offers the power and flexibility to support any messaging use-case.
                        </p>
                    </div>
                </section>

                <section className={styles.component}>
                    <div className="container">
                        <div className={styles.componentCard}>
                            <h3>ActiveMQ</h3>
                            <p>Long established, endlessly pluggable architecture serving many generations of applications.</p>
                            <ul>
                                <li><Link to="/components/classic/documentation/jms2">Partial Jakarta Messaging 3.1 &amp; JMS 2.0 support</Link> and full JMS 1.1 support + full client implementation including JNDI</li>
                                <li>High availability using shared storage</li>
                                <li>Familiar JMS-based addressing model</li>
                                <li>Network of brokers for distributing load</li>
                                <li>KahaDB &amp; JDBC options for persistence</li>
                            </ul>
                            <div className={styles.componentButtons}>
                                <Link className="button button--secondary button--md" to="/components/classic">
                                    Find out more
                                </Link>
                                <Link className="button button--secondary button--md" to="/components/classic/download">
                                    Download Latest
                                </Link>
                            </div>
                        </div>

                        <div className={styles.artemisNotice}>
                            <p>Looking for Artemis? See the <Link to="/news/artemis-tlp">news</Link>.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.community}>
                    <div className="container">
                        <p>
                            Enjoy the benefits of open source by <Link to="/contributing">contributing to a code-base</Link>,
                            asking a question on one of our <Link to="/contact#mailing">mailing lists</Link>,
                            or <Link to="/issues">reporting a bug or requesting a feature</Link>.
                            When you participate, we all win. That's the power of community. That's the power of open source.
                        </p>
                    </div>
                </section>

                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
