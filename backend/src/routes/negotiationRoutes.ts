import { Router } from 'express';
import { NegotiationService } from '../services/NegotiationService';
import { authenticate, AuthRequest } from '../middlewares/auth';
import { Negotiation } from '../models/Negotiation';

const router = Router();

// Start negotiation
router.post('/start', authenticate, async (req: AuthRequest, res) => {
  try {
    const { productId, mode } = req.body;
    const negotiation = await NegotiationService.startNegotiation(req.user!.id, productId, mode);
    res.status(201).json(negotiation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Submit offer
router.post('/:id/offer', authenticate, async (req: AuthRequest, res) => {
  try {
    const { offer } = req.body;
    const negotiation = await NegotiationService.processOffer(req.params.id, offer);
    res.json(negotiation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Accept offer
router.post('/:id/accept', authenticate, async (req: AuthRequest, res) => {
  try {
    const negotiation = await NegotiationService.acceptOffer(req.params.id);
    res.json(negotiation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Reject offer
router.post('/:id/reject', authenticate, async (req: AuthRequest, res) => {
  try {
    const negotiation = await NegotiationService.rejectOffer(req.params.id);
    res.json(negotiation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Auto step (trigger next round of Buyer Agent negotiation)
router.post('/:id/auto-step', authenticate, async (req: AuthRequest, res) => {
  try {
    const negotiation = await NegotiationService.autoStepNegotiation(req.params.id);
    res.json(negotiation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get user's negotiations
router.get('/my', authenticate, async (req: AuthRequest, res) => {
  try {
    const negotiations = await Negotiation.find({ buyerId: req.user!.id }).populate('productId');
    res.json(negotiations);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Get negotiation by ID
router.get('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const negotiation = await Negotiation.findOne({ negotiationId: req.params.id, buyerId: req.user!.id }).populate('productId');
    if (!negotiation) return res.status(404).json({ message: 'Not found' });
    res.json(negotiation);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
