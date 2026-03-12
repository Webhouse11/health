import { Post, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    name: 'Fitness & Exercise',
    slug: 'fitness-exercise',
    description: 'Expert advice on workouts, strength training, and staying active.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Nutrition & Diet',
    slug: 'nutrition-diet',
    description: 'Healthy eating habits, superfoods, and balanced meal planning.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Mental Health & Wellness',
    slug: 'mental-health',
    description: 'Strategies for mindfulness, stress management, and emotional well-being.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Preventive Health & Tips',
    slug: 'preventive-health',
    description: 'Proactive steps to maintain long-term health and avoid illness.',
    image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Weight Loss & Weight Management',
    slug: 'weight-loss',
    description: 'Sustainable strategies for reaching and maintaining your goal weight.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Lifestyle & Productivity',
    slug: 'lifestyle-productivity',
    description: 'Optimize your daily routines and environment for maximum vitality.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Supplements & Wellness Products',
    slug: 'supplements-wellness',
    description: 'Guides to vitamins, minerals, and the latest wellness technology.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Emerging Trends & Tech',
    slug: 'emerging-trends',
    description: 'The future of health: AI, wearables, and digital medicine.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export const POSTS: Post[] = [
  // --- FITNESS ---
  {
    id: 'f1',
    slug: '10-home-workouts-burn-fat',
    title: '10 Home Workouts That Burn Fat Fast',
    excerpt: 'No gym? No problem. These high-intensity bodyweight routines are designed to torch calories in under 30 minutes.',
    content: '# 10 Home Workouts That Burn Fat Fast\n\nBurning fat doesn\'t require expensive equipment. Here are 10 routines you can do in your living room...\n\n## 1. The Classic Burpee Blast\nBurpees are the ultimate full-body exercise...',
    category: 'Fitness & Exercise',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer focusing on functional movement.' },
    date: 'March 12, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200', featured: true
  },
  {
    id: 'f2',
    slug: 'beginners-guide-strength-training',
    title: 'Beginner’s Guide to Strength Training at Home',
    excerpt: 'Master the fundamentals of resistance training using just your bodyweight or household items.',
    content: '# Beginner’s Guide to Strength Training\n\nStrength training is the foundation of a healthy metabolism. Start with these five key movements...',
    category: 'Fitness & Exercise',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 11, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f3',
    slug: '15-minute-hiit-busy-people',
    title: '15-Minute HIIT Workouts for Busy People',
    excerpt: 'Short on time? These 15-minute bursts are scientifically proven to improve cardiovascular health.',
    content: '# 15-Minute HIIT\n\nHigh-Intensity Interval Training (HIIT) is perfect for the modern professional...',
    category: 'Fitness & Exercise',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 10, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f4',
    slug: 'yoga-reduce-stress-5-minutes',
    title: 'Yoga Poses to Reduce Stress in 5 Minutes',
    excerpt: 'Calm your nervous system instantly with these five restorative yoga postures.',
    content: '# Yoga for Stress Relief\n\nWhen stress hits, your breath and body are your best tools...',
    category: 'Fitness & Exercise',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 9, 2026', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f5',
    slug: 'best-cardio-weight-loss',
    title: 'Best Cardio Exercises for Weight Loss',
    excerpt: 'From running to swimming, discover which cardio modalities offer the highest caloric burn.',
    content: '# The Best Cardio for Weight Loss\n\nNot all cardio is created equal when it comes to fat loss...',
    category: 'Fitness & Exercise',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 8, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=1200'
  },

  // --- NUTRITION ---
  {
    id: 'n1',
    slug: '7-superfoods-boost-energy',
    title: '7 Superfoods That Boost Energy Instantly',
    excerpt: 'Ditch the caffeine and fuel your body with these nutrient-dense powerhouses.',
    content: '# 7 Superfoods for Energy\n\nWhat you eat directly impacts your cognitive and physical stamina...',
    category: 'Nutrition & Diet',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 12, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'n2',
    slug: 'healthy-meal-plans-busy-professionals',
    title: 'Healthy Meal Plans for Busy Professionals',
    excerpt: 'Master the art of meal prepping with these 30-minute recipes designed for a hectic work week.',
    content: '# Meal Planning for Professionals\n\nSuccess in health starts in the kitchen, even if you have no time...',
    category: 'Nutrition & Diet',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 11, 2026', readTime: '12 min read', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'n3',
    slug: 'intermittent-fasting-start-safely',
    title: 'Intermittent Fasting: How to Start Safely',
    excerpt: 'A comprehensive guide to the 16:8 method and how it can improve your metabolic health.',
    content: '# Intermittent Fasting Guide\n\nFasting is an ancient practice with modern scientific backing...',
    category: 'Nutrition & Diet',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 10, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'n4',
    slug: 'plant-based-protein-beginners',
    title: 'Plant-Based Protein Sources for Beginners',
    excerpt: 'Think you need meat for muscle? Think again. Explore the best vegan protein sources.',
    content: '# Plant-Based Protein\n\nFrom lentils to seitan, the plant kingdom is full of protein...',
    category: 'Nutrition & Diet',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 9, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'n5',
    slug: '10-delicious-low-calorie-snacks',
    title: '10 Delicious Low-Calorie Snacks',
    excerpt: 'Satisfy your cravings without breaking your calorie budget with these easy snack ideas.',
    content: '# Low-Calorie Snacks\n\nSnacking doesn\'t have to be the enemy of weight loss...',
    category: 'Nutrition & Diet',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 8, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200'
  },

  // --- MENTAL WELLNESS ---
  {
    id: 'm1',
    slug: '5-meditation-techniques-reduce-anxiety',
    title: '5 Meditation Techniques to Reduce Anxiety',
    excerpt: 'Find your center and quiet the noise with these proven mindfulness practices.',
    content: '# Meditation for Anxiety\n\nAnxiety lives in the future; meditation brings you back to the now...',
    category: 'Mental Health & Wellness',
    author: { name: 'Dr. Sarah Chen', role: 'Psychologist', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher in mental hygiene.' },
    date: 'March 12, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'm2',
    slug: 'mindfulness-exercises-beginners',
    title: 'Mindfulness Exercises for Beginners',
    excerpt: 'Simple daily habits to help you stay present and reduce stress in a chaotic world.',
    content: '# Mindfulness for Beginners\n\nYou don\'t need to sit on a mountain to be mindful...',
    category: 'Mental Health & Wellness',
    author: { name: 'Dr. Sarah Chen', role: 'Psychologist', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher in mental hygiene.' },
    date: 'March 11, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'm3',
    slug: 'improve-mental-focus-naturally',
    title: 'How to Improve Mental Focus Naturally',
    excerpt: 'Boost your productivity and cognitive clarity without relying on stimulants.',
    content: '# Natural Mental Focus\n\nFocus is a muscle that can be trained through diet and habit...',
    category: 'Mental Health & Wellness',
    author: { name: 'Dr. Sarah Chen', role: 'Psychologist', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher in mental hygiene.' },
    date: 'March 10, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'm4',
    slug: '7-stress-relief-techniques-actually-work',
    title: '7 Stress-Relief Techniques That Actually Work',
    excerpt: 'From box breathing to forest bathing, discover science-backed ways to decompress.',
    content: '# Real Stress Relief\n\nIn a high-pressure world, knowing how to down-regulate is vital...',
    category: 'Mental Health & Wellness',
    author: { name: 'Dr. Sarah Chen', role: 'Psychologist', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher in mental hygiene.' },
    date: 'March 9, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'm5',
    slug: 'daily-habits-happier-mind',
    title: 'Daily Habits for a Happier Mind',
    excerpt: 'Small changes in your morning and evening routines can lead to significant shifts in mood.',
    content: '# Habits for Happiness\n\nHappiness is often a byproduct of intentional living...',
    category: 'Mental Health & Wellness',
    author: { name: 'Dr. Sarah Chen', role: 'Psychologist', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher in mental hygiene.' },
    date: 'March 8, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
  },

  // --- WEIGHT LOSS ---
  {
    id: 'w1',
    slug: 'how-to-lose-belly-fat-4-weeks',
    title: 'How to Lose Belly Fat in 4 Weeks',
    excerpt: 'A realistic approach combining nutrition, exercise, and lifestyle changes for visible results.',
    content: '# Losing Belly Fat\n\nSpot reduction is a myth, but systemic fat loss is achievable...',
    category: 'Weight Loss & Weight Management',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 12, 2026', readTime: '12 min read', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'w2',
    slug: 'fat-burning-workouts-at-home',
    title: 'Fat-Burning Workouts You Can Do at Home',
    excerpt: 'Maximize your metabolic rate with these high-energy routines that require zero equipment.',
    content: '# Home Fat Burning\n\nYour body is the only gym you truly need...',
    category: 'Weight Loss & Weight Management',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 11, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'w3',
    slug: 'calorie-counting-apps-help',
    title: 'Calorie Counting Apps That Actually Help',
    excerpt: 'We reviewed the top 5 apps to help you track your macros and stay on target.',
    content: '# Best Calorie Tracking Apps\n\nData-driven weight loss is often the most successful...',
    category: 'Weight Loss & Weight Management',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 10, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'w4',
    slug: 'weight-loss-tips-busy-moms',
    title: 'Weight Loss Tips for Busy Moms',
    excerpt: 'Practical advice for fitting health into a hectic family schedule.',
    content: '# Weight Loss for Moms\n\nSelf-care isn\'t selfish; it\'s necessary for the whole family...',
    category: 'Weight Loss & Weight Management',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 9, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'w5',
    slug: '10-healthy-snacks-aid-weight-loss',
    title: '10 Healthy Snacks That Aid Weight Loss',
    excerpt: 'Keep your metabolism humming between meals with these nutrient-dense options.',
    content: '# Snacks for Weight Loss\n\nThe right snack can prevent overeating at dinner...',
    category: 'Weight Loss & Weight Management',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 8, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200'
  },

  // --- LIFESTYLE ---
  {
    id: 'l1',
    slug: 'morning-routines-productive-people',
    title: 'Morning Routines of Highly Productive People',
    excerpt: 'How you start your day determines how you finish it. Steal these elite morning habits.',
    content: '# Elite Morning Routines\n\nThe first hour of your day is the most important...',
    category: 'Lifestyle & Productivity',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 12, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'l2',
    slug: '7-habits-healthy-people-today',
    title: '7 Habits of Healthy People You Can Start Today',
    excerpt: 'Health isn\'t a destination; it\'s a set of daily choices. Start these seven habits now.',
    content: '# Habits for Health\n\nConsistency beats intensity every single time...',
    category: 'Lifestyle & Productivity',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 11, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'l3',
    slug: 'work-life-balance-remote-workers',
    title: 'Work-Life Balance Tips for Remote Workers',
    excerpt: 'Avoid burnout and maintain boundaries when your office is also your home.',
    content: '# Remote Work Balance\n\nWhen the lines between work and home blur, you need a system...',
    category: 'Lifestyle & Productivity',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 10, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'l4',
    slug: 'stay-motivated-exercise-daily',
    title: 'How to Stay Motivated to Exercise Daily',
    excerpt: 'Motivation is fleeting; discipline is forever. Learn how to build an unbreakable habit.',
    content: '# Exercise Motivation\n\nDon\'t wait for the feeling; create the action...',
    category: 'Lifestyle & Productivity',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 9, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'l5',
    slug: 'productivity-hacks-busy-professionals',
    title: 'Productivity Hacks for Busy Professionals',
    excerpt: 'Optimize your workflow and reclaim your time with these advanced productivity techniques.',
    content: '# Productivity for Professionals\n\nWork smarter, not harder, with these proven hacks...',
    category: 'Lifestyle & Productivity',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 8, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200'
  },

  // --- PREVENTIVE HEALTH ---
  {
    id: 'p1',
    slug: 'heart-health-tips-everyone-should-know',
    title: 'Heart Health Tips Everyone Should Know',
    excerpt: 'Cardiovascular disease is largely preventable. Learn the key indicators and habits for a strong heart.',
    content: '# Heart Health 101\n\nYour heart is the engine of your life. Keep it running smoothly...',
    category: 'Preventive Health & Tips',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 12, 2026', readTime: '11 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'p2',
    slug: 'foods-strengthen-immune-system',
    title: 'Foods That Strengthen Your Immune System',
    excerpt: 'Build your body\'s natural defenses with these powerful, nutrient-rich foods.',
    content: '# Immune Boosting Foods\n\nYour diet is your first line of defense against illness...',
    category: 'Preventive Health & Tips',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 11, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p3',
    slug: 'natural-remedies-common-cold',
    title: 'Natural Remedies for Common Cold',
    excerpt: 'Skip the pharmacy and try these effective, science-backed home remedies.',
    content: '# Natural Cold Remedies\n\nNature provides powerful tools for recovery...',
    category: 'Preventive Health & Tips',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 10, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p4',
    slug: 'sleep-improvement-tips-better-health',
    title: 'Sleep Improvement Tips for Better Health',
    excerpt: 'Quality rest is non-negotiable. Learn how to optimize your sleep hygiene for maximum recovery.',
    content: '# Better Sleep Hygiene\n\nSleep is when your body repairs itself. Don\'t skip it...',
    category: 'Preventive Health & Tips',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 9, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p5',
    slug: 'diabetes-prevention-5-simple-steps',
    title: 'Diabetes Prevention: 5 Simple Steps',
    excerpt: 'Take control of your blood sugar today with these manageable lifestyle adjustments.',
    content: '# Preventing Diabetes\n\nType 2 diabetes is often preventable through lifestyle...',
    category: 'Preventive Health & Tips',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 8, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },

  // --- SUPPLEMENTS & WELLNESS ---
  {
    id: 's1',
    slug: 'best-vitamins-energy-2026',
    title: 'Best Vitamins for Energy in 2026',
    excerpt: 'The latest research on B-vitamins, Vitamin D, and Magnesium for sustained vitality.',
    content: '# Energy Vitamins 2026\n\nSupplementation should be targeted and evidence-based...',
    category: 'Supplements & Wellness Products',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 12, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 's2',
    slug: 'herbal-teas-boost-health',
    title: 'Herbal Teas That Boost Your Health',
    excerpt: 'From chamomile to peppermint, explore the therapeutic benefits of your favorite brews.',
    content: '# The Power of Herbal Tea\n\nTea is more than just a drink; it\'s a liquid medicine...',
    category: 'Supplements & Wellness Products',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 11, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's3',
    slug: 'collagen-benefits-glowing-skin',
    title: 'Collagen Benefits for Glowing Skin',
    excerpt: 'Does collagen supplementation actually work? We dive into the latest dermatological studies.',
    content: '# Collagen for Skin\n\nCollagen is the scaffolding of your skin. Here is how to support it...',
    category: 'Supplements & Wellness Products',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 10, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's4',
    slug: 'supplements-improve-mental-focus',
    title: 'Supplements That Improve Mental Focus',
    excerpt: 'Explore nootropics and natural compounds that can enhance your cognitive performance.',
    content: '# Nootropics for Focus\n\nBrain health can be supported through smart supplementation...',
    category: 'Supplements & Wellness Products',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 9, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's5',
    slug: 'top-5-wellness-apps-need',
    title: 'Top 5 Wellness Apps You Need',
    excerpt: 'From meditation to habit tracking, these apps are essential for a modern wellness routine.',
    content: '# Essential Wellness Apps\n\nTechnology can be a powerful ally in your health journey...',
    category: 'Supplements & Wellness Products',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 8, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200'
  },

  // --- TECH & EMERGING TRENDS ---
  {
    id: 't1',
    slug: 'ai-tools-revolutionizing-health-2026',
    title: 'AI Tools Revolutionizing Health in 2026',
    excerpt: 'How artificial intelligence is personalizing nutrition, fitness, and medical diagnostics.',
    content: '# AI in Health 2026\n\nAI is no longer the future; it\'s the present of wellness...',
    category: 'Emerging Trends & Tech',
    author: { name: 'Marcus Thorne', role: 'Tech Analyst', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus tracks the intersection of tech and health.' },
    date: 'March 12, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 't2',
    slug: 'wearable-tech-fitness-tracking',
    title: 'Wearable Tech for Fitness Tracking',
    excerpt: 'A review of the latest smartwatches and rings that monitor your every move and heartbeat.',
    content: '# The Best Wearables\n\nData is power. Here is how to use it to optimize your health...',
    category: 'Emerging Trends & Tech',
    author: { name: 'Marcus Thorne', role: 'Tech Analyst', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus tracks the intersection of tech and health.' },
    date: 'March 11, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 't3',
    slug: 'online-fitness-coaches-trust',
    title: 'Online Fitness Coaches You Can Trust',
    excerpt: 'How to find a qualified digital trainer who can help you reach your goals remotely.',
    content: '# Finding a Digital Coach\n\nNot all online trainers are created equal. Here is what to look for...',
    category: 'Emerging Trends & Tech',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 10, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 't4',
    slug: 'telemedicine-consult-doctor-online',
    title: 'Telemedicine: How to Consult a Doctor Online',
    excerpt: 'A guide to navigating the world of virtual healthcare for faster, more convenient care.',
    content: '# Telemedicine Guide\n\nVirtual care is changing the way we interact with medicine...',
    category: 'Emerging Trends & Tech',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 9, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 't5',
    slug: 'virtual-fitness-trainers-actually-work',
    title: 'Virtual Fitness Trainers That Actually Work',
    excerpt: 'We tested the top AI and video-based trainers to see which ones deliver real results.',
    content: '# Testing Virtual Trainers\n\nCan an app replace a human trainer? We find out...',
    category: 'Emerging Trends & Tech',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 8, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },

  // --- GENERAL HEALTH ---
  {
    id: 'g1',
    slug: 'how-to-live-longer-naturally',
    title: 'How to Live Longer Naturally',
    excerpt: 'Discover the secrets of the Blue Zones and how simple lifestyle changes can add years to your life.',
    content: '# Longevity Secrets\n\nLiving a long, healthy life is about more than just genes...',
    category: 'Healthy Lifestyle',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 12, 2026', readTime: '12 min read', image: 'https://images.unsplash.com/photo-1541781719201-68bca29f583a?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'g2',
    slug: 'simple-ways-stay-fit-home',
    title: 'Simple Ways to Stay Fit at Home',
    excerpt: 'Maintain your fitness levels without a gym membership using these easy daily activities.',
    content: '# Staying Fit at Home\n\nFitness is about movement, not just gym sessions...',
    category: 'Healthy Lifestyle',
    author: { name: 'Elena Rodriguez', role: 'Fitness Coach', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Elena is a certified personal trainer.' },
    date: 'March 11, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1541781719201-68bca29f583a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'g3',
    slug: 'natural-stress-remedies-work',
    title: 'Natural Stress Remedies That Work',
    excerpt: 'From ashwagandha to magnesium, explore the natural compounds that can help you relax.',
    content: '# Natural Stress Relief\n\nYour body has natural mechanisms for relaxation. Here is how to trigger them...',
    category: 'Healthy Lifestyle',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 10, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1541781719201-68bca29f583a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'g4',
    slug: 'healthy-lifestyle-tips-beginners',
    title: 'Healthy Lifestyle Tips for Beginners',
    excerpt: 'Start your wellness journey on the right foot with these foundational health principles.',
    content: '# Wellness for Beginners\n\nDon\'t try to change everything at once. Start here...',
    category: 'Healthy Lifestyle',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 9, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1541781719201-68bca29f583a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'g5',
    slug: 'beginners-guide-nutrition',
    title: 'Beginner’s Guide to Nutrition',
    excerpt: 'Understand macros, micros, and how to fuel your body for optimal performance.',
    content: '# Nutrition 101\n\nFood is information for your cells. Here is what you need to know...',
    category: 'Healthy Lifestyle',
    author: { name: 'Marcus Thorne', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus specializes in holistic nutrition.' },
    date: 'March 8, 2026', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1541781719201-68bca29f583a?auto=format&fit=crop&q=80&w=1200'
  },

  // --- TRENDING / HOT TOPICS ---
  {
    id: 'h1',
    slug: 'latest-health-news-2026',
    title: 'Latest Health News You Should Know in 2026',
    excerpt: 'A roundup of the most significant medical breakthroughs and health policy changes this year.',
    content: '# Health News 2026\n\nStay informed on the rapidly changing landscape of global health...',
    category: 'Medical Updates & Research',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 12, 2026', readTime: '15 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200', trending: true
  },
  {
    id: 'h2',
    slug: 'best-online-resources-mental-wellness',
    title: 'Best Online Resources for Mental Wellness',
    excerpt: 'Our curated list of the most reliable websites and communities for mental health support.',
    content: '# Mental Health Resources\n\nYou are not alone. Here are the best places to find help online...',
    category: 'Medical Updates & Research',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 11, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'h3',
    slug: 'how-ai-changing-fitness-industry',
    title: 'How AI Is Changing the Fitness Industry',
    excerpt: 'From personalized workouts to predictive injury prevention, AI is the new personal trainer.',
    content: '# AI and Fitness\n\nThe fitness industry is being disrupted by intelligent algorithms...',
    category: 'Medical Updates & Research',
    author: { name: 'Marcus Thorne', role: 'Tech Analyst', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus tracks the intersection of tech and health.' },
    date: 'March 10, 2026', readTime: '11 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'h4',
    slug: 'telemedicine-tips-stay-healthy-home',
    title: 'Telemedicine Tips: Stay Healthy from Home',
    excerpt: 'Maximize your virtual doctor visits with these preparation and communication strategies.',
    content: '# Telemedicine Success\n\nVirtual care is only as good as your preparation. Here is how to do it right...',
    category: 'Medical Updates & Research',
    author: { name: 'Dr. Sarah Chen', role: 'Medical Expert', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Dr. Chen is a leading researcher.' },
    date: 'March 9, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'h5',
    slug: 'top-10-health-hacks-busy-professionals',
    title: 'Top 10 Health Hacks for Busy Professionals',
    excerpt: 'Quick, effective strategies to maintain your health when you have zero free time.',
    content: '# Health Hacks for Professionals\n\nEfficiency is key when it comes to wellness in a busy world...',
    category: 'Medical Updates & Research',
    author: { name: 'Marcus Thorne', role: 'Wellness Expert', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Marcus focuses on high-performance living.' },
    date: 'March 8, 2026', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1200'
  }
];
