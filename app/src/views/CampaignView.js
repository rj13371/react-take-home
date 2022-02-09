import React, { useEffect, useState } from "react";
import { Container, Button, Spinner, Alert } from "react-bootstrap";
import CampaignCard from "../components/CampaignCard";
import axios from "axios";

export default function CampaignView() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const getCampaigns = async () => {
    try {
      const res = await axios.get(
        "https://www.plugco.in/public/take_home_sample_feed"
      );

      setCampaigns(res.data.campaigns);
      setLoading(false);
      setErr(false);
    } catch (e) {
      if (e) {
        setErr(true);
      }
    }
  };

  useEffect(() => {
    if (loading) {
      getCampaigns();
    }
  }, [campaigns]);

  if (err) {
    return (
      <Container>
        <Alert variant="danger">
          Oh no! Something went wrong. Try to refresh
        </Alert>
        <Button size="md" variant="primary" onClick={() => getCampaigns()}>
          Refresh
        </Button>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container>
      {!loading &&
        campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      <CampaignCard />
    </Container>
  );
}
