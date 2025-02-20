import { Box, Container, Grid, Typography, IconButton, Link } from "@mui/material";
import { Facebook, LinkedIn, Twitter, Google, Place, Phone, Email } from "@mui/icons-material";
import logo from "../assets/logo.png";

const FooterSection = () => {
    return (
        <Box sx={{ background: "#0a0a0a", color: "white", py: 5, mt: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Coluna 1 - Sobre a Empresa */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 1 }}>                            
                            <img src={logo} alt="Logo" style={{ height: 50 }} />
                            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                                ZeroGravity
                            </Typography>
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique tristique a orci pellentesque commodo.
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <IconButton sx={{ color: "white" }}>
                                <Facebook />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <LinkedIn />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <Twitter />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <Google />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Coluna 2 - Serviços */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">
                            Quick Services
                        </Typography>
                        {["Content Management", "Email Marketing", "Social Marketing", "Keyword Analytics"].map((service, index) => (
                            <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                                {service}
                            </Typography>
                        ))}
                    </Grid>

                    {/* Coluna 3 - Contato */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">
                            Get in Touch
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                            <Place fontSize="small" sx={{ mr: 1 }} /> Santos, São Paulo, Brazil
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                            <Phone fontSize="small" sx={{ mr: 1 }} /> +0999999999
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                            <Phone fontSize="small" sx={{ mr: 1 }} /> +0999999999
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                            <Email fontSize="small" sx={{ mr: 1 }} /> edu.fidalgo18@gmail.com
                        </Typography>
                    </Grid>

                    {/* Coluna 4 - Tweets Recentes (Imagens) */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" fontWeight="bold">
                            Recent Tweet
                        </Typography>
                        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px", mt: 2 }}>
                            {[...Array(6)].map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: "gray",
                                        borderRadius: "5px",
                                    }}
                                />
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Linha Separadora */}
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Box
                        sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            backgroundColor: "#8D48E8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "auto",
                        }}
                    >
                        <Typography variant="h6" color="white">^</Typography>
                    </Box>
                </Box>

                {/* Rodapé */}
                <Box sx={{ textAlign: "center", mt: 3 }}>
                    <Typography variant="body2">
                        © All Rights Reserved 2025. Developed by <Link href="fidalgo.vercel.app" sx={{ color: "#B166F6" }}>Eduardo Fidalgo</Link>
                    </Typography>
                    <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: "15px" }}>
                        {["Home", "Terms", "Affiliates", "Privacy", "Policy", "Sitemap"].map((item, index) => (
                            <Typography key={index} variant="body2">
                                <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
                                    {item}
                                </Link>
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FooterSection;
