
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  ExternalLink, 
  TwitterIcon, 
  SendIcon,
  Copy,
  Info
} from "lucide-react";

const Token = () => {
  const { tokenId } = useParams();
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4" />
            go back
          </Link>
          <div className="flex items-center gap-2">
            <img src="/amazon-logo.png" alt="Token" className="h-8 w-8 rounded-full" />
            <div>
              <h1 className="text-xl font-bold">PRIME (PRIME)</h1>
              <p className="text-sm text-muted-foreground">Coin of Amazon for Pay</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* TradingView Chart */}
            <Card className="p-4 h-[500px] relative">
              <div className="tradingview-widget-container h-full">
                <div id="tradingview_chart" className="h-full" />
              </div>
            </Card>

            {/* Chat Section */}
            <Card className="p-4">
              <div className="space-y-4">
                <div className="h-[300px] overflow-y-auto p-4 bg-muted/50 rounded-lg">
                  {/* Chat messages would go here */}
                </div>
                <div className="flex gap-2">
                  <Input 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button>
                    <SendIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Buy/Sell Box */}
            <Card className="p-4">
              <div className="flex gap-2 mb-4">
                <Button className="flex-1 bg-green-500 hover:bg-green-600">Buy</Button>
                <Button variant="outline" className="flex-1">Sell</Button>
              </div>
              
              <div className="space-y-4">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="text-right"
                />
                
                <div className="flex gap-2 justify-end text-sm">
                  <Button variant="ghost" size="sm">0.1 SOL</Button>
                  <Button variant="ghost" size="sm">0.5 SOL</Button>
                  <Button variant="ghost" size="sm">1 SOL</Button>
                  <Button variant="ghost" size="sm">MAX</Button>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Place Trade
                </Button>
              </div>
            </Card>

            {/* Token Info */}
            <Card className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">Bonding curve progress</span>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">11%</span>
                </div>
                <Progress value={11} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  graduate this coin to raydium at $69,945 market cap.
                  there is 2.467 SOL in the bonding curve.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">King of the hill progress</span>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <Progress value={12} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  dethrone the current king at $33,804 market cap.
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <TwitterIcon className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="flex-1">
                  <SendIcon className="h-4 w-4 mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Website
                </Button>
              </div>

              <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <span className="text-sm text-muted-foreground">Contract address:</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">6kTLs...pump</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
