import React from 'react';
import {
    Container,
    Table,
    TableHead,
    TableBody,
    TableFooter,
    TableRow,
    TableCell,
    Typography,
    Link,
    TableContainer,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { PricingMainContainer } from './style';
import Button from '@mui/material/Button';
import { SecButton } from '../homePage/style';
import { NavbarLink } from '../../component/navbar/style';
const PricingTableComponent = () => {
    return (
        <PricingMainContainer>
            <Container className="pricing">
                <Typography variant="h5">Pricing</Typography>
                <TableContainer className="pricing-table-container">
                    <Table
                        style={{
                            marginTop: 20,
                            border: "1px solid gray"
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Self-service</TableCell>
                                <TableCell>Free account</TableCell>
                                <TableCell>Starter plan</TableCell>
                                <TableCell>Premium plan</TableCell>
                                <TableCell>Enterprise plan</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>iOS and Android apps upload</TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Installation links to send to testers</TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>iOS and Android apps uploadLinks protected by a password</TableCell>
                                <TableCell> <CheckIcon />  </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon />  </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> <span>Dashboard to manage uploaded apps</span> </TableCell>
                                <TableCell> <CheckIcon />  </TableCell>
                                <TableCell> <CheckIcon />  </TableCell>
                                <TableCell> <CheckIcon />  </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> <span>APIs access</span> </TableCell>
                                <TableCell> <CheckIcon />  </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell> <span>Installation notifications</span> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell>  <span>Installation statistics</span> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell> <span>Link expiration alerts & recovery</span> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell> <span>Full history</span> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                                <TableCell> <CheckIcon /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell> <span>Pay-per-use add-ons</span> </TableCell>
                                <TableCell>
                                    <span>Included add-ons <br />
                                        {/* <ul>
                                            <li>25 x 100 installations</li>
                                            <li>25 x 1 month expiration</li>
                                            <li>25 x link customization</li>
                                            <li>1 x custom page</li>
                                        </ul> */}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span>Premium add-ons + <br />
                                        {/* <ul>
                                            <li>Custom domain names</li>
                                            <li>White label pages</li>
                                            <li>Custom page URLs</li>
                                            <li>Expedited tickets</li>
                                        </ul> */}
                                    </span> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell> </TableCell>
                                <TableCell> </TableCell>
                                <TableCell> <span>Manage apps by any team member</span> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> </TableCell>
                                <TableCell> </TableCell>
                                <TableCell> </TableCell>
                                <TableCell> <span>Single billing for the whole team</span> </TableCell>
                            </TableRow>
                            {/* Add other rows here */}
                        </TableBody>
                        <TableFooter>
                            <TableRow className="prices"
                                style={{
                                    padding: "14px 10px",
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    backgroundColor: "#f0f0f0",
                                }}
                            >
                                <TableCell className='pricing'>No signup</TableCell>
                                <TableCell className='pricing'>0,00$</TableCell>
                                <TableCell className='pricing'>2,99$ <span>/ month</span></TableCell>
                                <TableCell className='pricing'>29,99$ <span>/ month</span></TableCell>
                                <TableCell className='pricing'>299,99$ <span>/ month</span></TableCell>
                            </TableRow>
                            <TableRow className="signup">
                                <TableCell>
                                    <SecButton>
                                        <Button href="/">Go</Button>
                                    </SecButton>
                                </TableCell>
                                <TableCell>
                                    <SecButton>
                                        <Button href="/signup" className="highlighted">
                                            Sign up
                                        </Button>
                                    </SecButton>
                                </TableCell>
                                <TableCell>
                                    <SecButton>
                                        <Button href="/signup" className="highlighted">
                                            Sign up
                                        </Button>
                                    </SecButton>
                                </TableCell>
                                <TableCell>
                                    <SecButton>
                                        <Button href="/signup" className="highlighted">
                                            Sign up
                                        </Button>
                                    </SecButton>
                                </TableCell>

                                <TableCell>
                                    <SecButton>

                                        <NavbarLink to={'/contact'}>
                                            <Button disableElevation>CONTACT US</Button>
                                        </NavbarLink>
                                    </SecButton></TableCell>
                            </TableRow>

                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </PricingMainContainer>

    );
};

export default PricingTableComponent;
