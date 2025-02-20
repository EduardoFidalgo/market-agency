import { TrendingUp, Insights, Public, Shield } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import * as React from "react";

const highlights = [
    {
        icon: <TrendingUp sx={{ fontSize: 50, color: "#8E09CF" }} />,
        title: "Crescimento Exponencial",
        description: "Aceleramos marcas para o futuro com estratégias inovadoras e tecnologia avançada.",
    },
    {
        icon: <Insights sx={{ fontSize: 50, color: "#8E09CF" }} />,
        title: "Análises de Alta Precisão",
        description: "Inteligência artificial aplicada para insights estratégicos e campanhas eficientes.",
    },
    {
        icon: <Public sx={{ fontSize: 50, color: "#8E09CF" }} />,
        title: "Alcance Global",
        description: "Criamos campanhas impactantes que transcendem fronteiras e conectam audiências.",
    },
    {
        icon: <Shield sx={{ fontSize: 50, color: "#8E09CF" }} />,
        title: "Segurança e Inovação",
        description: "Dados protegidos e estratégias futuristas para garantir sua posição no mercado.",
    },
];

const Highlights = () => {
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "60px 20px",
                background: "linear-gradient(135deg, #0a0a0a 20%, #1e0036 80%)", // Mesma cor do fundo da próxima seção
                color: "white",
            }}
        >
            <Grid container maxWidth="lg" justifyContent="center" spacing={4}>
                {highlights.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card
                            sx={{
                                textAlign: "center",
                                padding: 3,
                                background: "rgba(255, 255, 255, 0.08)",
                                borderRadius: "16px",
                                width: "100%",
                                maxWidth: 260,
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(10px)",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    borderColor: "#A55FFF",
                                },
                            }}
                        >
                            {item.icon}
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" sx={{ color: "#A55FFF" }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default Highlights;
