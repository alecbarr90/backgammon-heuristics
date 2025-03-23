"use client";

import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Clock, 
  Layers, 
  Compass, 
  Anchor, 
  Shield, 
  ArrowUpRight, 
  Rocket 
} from 'lucide-react';

interface HeuristicPoint {
  text: string;
}

interface HeuristicSection {
  title: string;
  points: HeuristicPoint[];
}

interface HeuristicCategory {
  category: string;
  sections: HeuristicSection[];
}

// Get icon based on section or category title
function getIcon(title: string) {
  switch (title) {
    case "Reasons for Hitting":
      return <Target className="w-5 h-5" />;
    case "Hitting Loose in the Early Game":
      return <Zap className="w-5 h-5" />;
    case "Hitting Loose in the Middle Game":
      return <Compass className="w-5 h-5" />;
    case "The Tempo Hit":
      return <Clock className="w-5 h-5" />;
    case "The Double Hit":
      return <Layers className="w-5 h-5" />;
    case "Hitting in the Opponent's Inner Board":
      return <ArrowUpRight className="w-5 h-5" />;
    case "Hitting or Making a Defensive Point":
      return <Shield className="w-5 h-5" />;
    case "Leaving our Anchor in Order to Hit":
      return <Anchor className="w-5 h-5" />;
    case "Hitting or Making an Offensive Point":
      return <Rocket className="w-5 h-5" />;
    // Category icons
    case "Basic Concepts":
      return <Target className="w-6 h-6" />;
    case "Hitting in the Inner Board":
      return <ArrowUpRight className="w-6 h-6" />;
    case "Hitting in the Outer Board":
      return <Compass className="w-6 h-6" />;
    default:
      return <Target className="w-5 h-5" />;
  }
}

function transformBullet(text: string, sectionTitle: string): React.ReactElement {
  const singleLine = text.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim();
  
  // For "Leaving our Anchor" section, bold portion before the colon
  if (sectionTitle === "Leaving our Anchor in Order to Hit") {
    const idx = singleLine.indexOf(":");
    if (idx !== -1) {
      return (
        <>
          <strong>{singleLine.slice(0, idx).trim()}:</strong> {singleLine.slice(idx + 1).trim()}
        </>
      );
    }
  }

  return <>{singleLine}</>;
}

const heuristicsData: HeuristicCategory[] = [
  {
    category: "Basic Concepts",
    sections: [
      {
        title: "Reasons for Hitting",
        points: [
          {
            text: "Checker play and cube play can't be viewed in isolation. Your goal is to maximize your cubeful equity, meaning that you need to factor in possible future cube actions when deciding whether to hit. A typical example is taking into account the cube action after your opponent dances."
          },
          {
            text: "Hitting frequently leads to positions with very different gammon rates compared to non-hitting alternatives, which is why you need to relate additional gammon wins to additional losses. In unlimited winning an extra gammon is half as important as winning the game. This ratio is called gammon value."
          },
          {
            text: "The gammon value depends on the match score. An extreme case is gammon-go (2-away/Crawford) with gammon value 1 for the player and gammon value 0 for the opponent."
          },
          {
            text: "The short-term tactical advantage of hitting is that it restricts your opponent's options for at least one turn. Sometimes you need to hit in order to prevent your opponent from carrying out her threats even if hitting doesn't fit your game plan."
          },
          {
            text: "Just because you decline to make an aggressive blitzing play does not mean that the blitz is over. You may be able to resume it on the next turn under more favorable conditions."
          },
          {
            text: "You need to keep an open mind when playing backgammon and be able to adjust your game plan quickly to changing circumstances. Very bold tactical measures may be required when the dice are such that pursuing the original plan will likely lead to defeat."
          },
          {
            text: "You shouldn't hit with a strong home board when staying out is an above-average outcome for your opponent. This frequently occurs in backgames, but sometimes also in prime-versus-prime positions."
          }
        ]
      }
    ]
  },
  {
    category: "Hitting in the Inner Board",
    sections: [
      {
        title: "Hitting Loose in the Early Game",
        points: [
          {
            text: "In the early game when there is no constructive alternative, hit loose on your 5 point and, generally, on your 4 point."
          },
          {
            text: "The better your opponent's builder distribution, the more attractive hitting becomes."
          },
          {
            text: "It is almost always better to make your opponent's 5 point than to hit loose on your own 5 point. When the choice is between anchoring on your opponent's 4 point and hitting loose on the 5, make the anchor as a default."
          },
          {
            text: "Hit loose when the passive alternative leaves a direct shot anyway."
          },
          {
            text: "It is much more attractive to hit loose by unstacking the 6 point than by stripping the 8 point."
          },
          {
            text: "Make an outfield point rather than hit loose on the 4 point."
          },
          {
            text: "When you are not sure whether to hit, look how your opponent's sixes play from the bar. When your opponent can use sixes elsewhere don't hit, and when they play poorly hit."
          },
          {
            text: "When you are behind in development you should actively try to change the course of the game. Conversely, when you are ahead in development, you should generally be inclined to play more conservatively."
          },
          {
            text: "Game planning or tactical needs are usually more important than improving your checker distribution."
          },
          {
            text: "When you think that you will lose lots of gammons no matter what you do, make the move you think will win the most games."
          },
          {
            text: "When you are down in race and not behind a prime, jumping into the opponent's outfield with one of your back checkers is usually wrong if there is any reasonable alternative available."
          }
        ]
      },
      {
        title: "Hitting Loose in the Middle Game",
        points: [
          {
            text: "Deeper into the game, when both players have developed their front positions more fully, both the risks and the rewards of hitting loose increase. You therefore need to carefully evaluate how often the aggressive approach works and how much you gain when it does."
          },
          {
            text: "When your opponent has a strong front position, playing passively and doing nothing could lead to a quick loss as well. Hit loose despite the risk when a passive game plan like trying to convert the game into a race is not likely to be successful."
          },
          {
            text: "When front positions are stronger, it is even more important to look at how your opponent's numbers play. Some additional good or bad numbers after each alternative can make a huge difference."
          },
          {
            text: "Don't rely on pattern recognition alone. A strong-looking hitting play can be quite weak when it gives your opponent many good numbers from the bar."
          },
          {
            text: "Be less inclined to attack a lone back checker when you still have a good game even when it escapes."
          },
          {
            text: "With a made ace point you don't mind breaking your bar point in order to hit loose."
          },
          {
            text: "When you are not relying on building a strong prime in order to win, seemingly ugly but safe pick and pass plays are oftentimes better than loose hits."
          },
          {
            text: "When you are in a bad position, focus on taking maximum advantage of your opponent's bad numbers."
          }
        ]
      },
      {
        title: "The Tempo Hit",
        points: [
          {
            text: "The more numbers your opponent has to attack your back checkers the more important it becomes to make a tempo hit."
          },
          {
            text: "A tempo hit is more attractive when your opponent is split to your bar point than when she is split inside your home board because you can disconnect her back checkers."
          },
          {
            text: "When your opponent misses after you hit loose on your ace point, you should cover your blot as quickly as possible."
          },
          {
            text: "Be more inclined to make a tempo hit when your opponent has a blot in her inner board."
          },
          {
            text: "When you are in a bad position, focus on giving your opponent bad numbers. A tempo hit can be your best option because of the outside chance that your opponent may dance."
          },
          {
            text: "When your opponent threatens to launch a powerful attack and/or to build a very strong prime, consider hitting plays even when they do lots of structural damage to your position. This can also occur in the form of a tempo switch."
          }
        ]
      },
      {
        title: "The Double Hit",
        points: [
          {
            text: "When hitting loose on a high inner board point leaves you with multiple blots, you should continue and hit a second checker if possible, even on your own ace point."
          },
          {
            text: "Avoid hitting loose on the ace point when you have made your bar point."
          },
          {
            text: "Hitting twice becomes much more attractive when your opponent's second blot is on your deuce point instead of on your ace point."
          },
          {
            text: "When your opponent has a strong front position you may not want to hit at all, but when you do, hit twice if possible."
          },
          {
            text: "Be less inclined to hit twice when you have good priming potential and more inclined with good blitzing potential."
          },
          {
            text: "Be more inclined to hit twice when your opponent has many rolls to improve her front position."
          },
          {
            text: "Be much more inclined to make a double hit with a single blot or a double tiger play when your opponent has one or more blots, especially when she has one in her home board."
          },
          {
            text: "At gammon-go you should strongly consider a double tiger play even when it looks like an overplay in a normal situation. The same is true for a double hit with a single blot. At gammon-save, by contrast, double tiger plays in particular should rarely be done when there is a reasonable, safe alternative."
          },
          {
            text: "Consider the location of the cube before making a play that leads to a volatile position with high gammon rates. As the favorite with the cube still in the middle, you generally want to avoid big gambles."
          }
        ]
      },
      {
        title: "Hitting in the Opponent's Inner Board",
        points: [
          {
            text: "Hitting in our opponent's inner board is usually the default play. However, there are possible reasons for NOT hitting in our opponent's inner board..."
          },
          {
            text: "You have a very strong constructive alternative with your roll like making two valuable points."
          },
          {
            text: "By making a strong inner board point you can conserve your developmental advantage, whereas hitting leads to a more unstable position."
          },
          {
            text: "Your opponent already has many checkers back so hitting an additional checker goes down in value, whereas making a strong offensive point instead goes up in value."
          },
          {
            text: "You have a very weak home board and after strengthening it instead of hitting, there is plenty of contact left."
          },
          {
            text: "The blot that you can hit (usually on the ace point) is a liability for your opponent rather than an asset."
          }
        ]
      }
    ]
  },
  {
    category: "Hitting in the Outer Board",
    sections: [
      {
        title: "Hitting or Making a Defensive Point",
        points: [
          {
            text: "Hitting tends to win more gammons and often wins more games than making the anchor but it generally loses many more gammons. Therefore at gammon-save the default play is to anchor whereas at gammon-go it is to hit."
          },
          {
            text: "The checker distribution after both alternatives matters. It can make a difference, for example, where a third back checker is placed after anchoring, or whether your back checkers are split after hitting."
          },
          {
            text: "It makes a big difference whether you can anchor on the 20 point or on the 21 point. When in doubt make the anchor on your opponent's 5 point and hit when the alternative is to anchor on her 4 point."
          },
          {
            text: "Tend to make the anchor when your opponent has good priming potential. You need to have very good reasons not to anchor on your opponent's 5 point when she has already made her 4 point."
          },
          {
            text: "When your opponent has good blitzing potential, it makes a big difference whether she can also build a strong prime or not. In the latter case you can oftentimes afford to hit even when you are outboarded, whereas in the former your default should be to anchor."
          },
          {
            text: "Hitting is usually better than anchoring when both sides have three or more points in their inner board and you are not outboarded."
          }
        ]
      },
      {
        title: "Leaving our Anchor in Order to Hit",
        points: [
          {
            text: "Overall situation: be more inclined to hit when your overall situation is bad. Even taking a significant risk is preferable to ending up in a holding game with a large racing deficit."
          },
          {
            text: "Lack of safe alternatives: be more inclined to hit when there are no safe and/or constructive alternatives."
          },
          {
            text: "Additional blots: be less inclined to hit when you have additional blots."
          },
          {
            text: "Quality of the anchor: the weaker your anchor is, the more attractive it becomes to leave it in order to hit."
          },
          {
            text: "Return shots: you need to count return shots. Naturally, the more you leave the more dangerous hitting becomes, especially when your opponent's home board is strong."
          },
          {
            text: "Relative board strength: the stronger your home board is relative to your opponent's board, the more attractive hitting becomes."
          }
        ]
      },
      {
        title: "Hitting or Making an Offensive Point",
        points: [
          {
            text: "Make your 5 point instead of hitting in your own outfield unless you see a compelling reason not to do so."
          },
          {
            text: "The value of an inner board point depends upon the number and placement of your opponent's back checkers in addition to the location of the point itself."
          },
          {
            text: "Avoid having your back checkers split when you have many builders in place."
          },
          {
            text: "A good inner board point also has defensive value since it makes it less attractive for your opponent to attack your back checkers."
          },
          {
            text: "Making the point usually loses fewer gammons than hitting and is often correct at gammon-save."
          },
          {
            text: "Make a good inside point rather than hitting a second checker."
          },
          {
            text: "Pay attention to whether your opponent's good numbers are diversified or duplicated after the point-making play."
          },
          {
            text: "Making a good inside point goes down in value when your opponent has an advanced anchor."
          },
          {
            text: "When you are at a disadvantage in a priming battle jump your opponent's prime and hit rather than improving your own prime. The opposite is true when you are doing well in a potential priming contest."
          }
        ]
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-emerald-50 to-white flex flex-col items-center py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full"
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
            To Hit or Not to Hit
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mt-2 font-medium">by Dirk Schiemann</p>
          <p className="text-lg md:text-xl text-slate-700 mt-3 leading-relaxed">
            A curated codex of backgammon heuristics from Dirk&apos;s book
          </p>
        </div>

        <hr className="mb-10 border-t border-slate-200" />

        {heuristicsData.map((category, catIndex) => (
          <div 
            key={catIndex}
            className="shadow-2xl border border-slate-200 rounded-2xl bg-white/70 backdrop-blur-md mb-8 overflow-hidden"
          >
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-3xl font-bold text-slate-900 whitespace-normal tracking-tight letter-spacing-tight flex items-center">
                <span className="mr-3 text-emerald-700">{getIcon(category.category)}</span>
                <span>{category.category}</span>
              </h2>
            </div>
            <div className="py-4 px-6">
              {category.sections.map((section, idx) => (
                <details key={idx} className="group">
                  <summary className="text-xl md:text-2xl font-medium text-slate-800 transition-all break-words cursor-pointer tracking-tight flex items-center">
                    <span className="mr-3 text-emerald-600">{getIcon(section.title)}</span>
                    <span>{section.title}</span>
                  </summary>
                  <div className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.points.map((pt, i) => {
                        return (
                          <div
                            key={i}
                            className="shadow-sm border border-slate-200 rounded-xl bg-white transition-transform hover:-translate-y-0.5 p-4"
                          >
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed break-words">
                              {transformBullet(pt.text, section.title)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
